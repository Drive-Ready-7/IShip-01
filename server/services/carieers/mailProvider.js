import axios from "axios";
import {htmlToText} from "html-to-text";

const getMailsById = async (accessToken) => {
    try {
        const res = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                maxResults: 2
            }
        });

        return res.data.messages;
    } catch (err) {
        console.error("Error fetching message list:", err?.response?.data || err);
        return [];
    }
};

const getMessageDetail = async (accessToken, messageId) => {
    const res = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: {
            format: 'full'
        }
    });

    return res.data;
};

function flattenEmailContent(multilineText) {
    return multilineText
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}


const extractBody = (payload) => {
    if (!payload) return '';

    const decode = (data) => Buffer.from(data, 'base64').toString('utf-8');

    const cleanText = (text) =>
        text
            .replace(/&nbsp;/g, ' ')
            .replace(/&zwnj;/g, ' ')
            .replace(/\n/g, ' ')
            .replace(/\s{3,}/g, ' ')
            .replace(/\n{3,}/g, ' ')
            .trim();

    const findPart = (parts) => {
        for (const part of parts) {
            if (part.mimeType === 'text/plain' && part.body?.data) {
                return cleanText(decode(part.body.data));
            }
            if (part.mimeType === 'text/html' && part.body?.data) {
                const html = decode(part.body.data);
                return cleanText(htmlToText(html, { wordwrap: false }));
            }
            if (part.parts) {
                const nested = findPart(part.parts);
                if (nested) return nested;
            }
        }
        return null;
    };

    if (payload.mimeType === 'text/plain' && payload.body?.data) {
        return cleanText(decode(payload.body.data));
    }

    if (payload.mimeType === 'text/html' && payload.body?.data) {
        const html = decode(payload.body.data);
        return cleanText(htmlToText(html, { wordwrap: false }));
    }

    if (payload.parts) {
        const content = findPart(payload.parts);
        if (content) return content;
    }

    if (payload.body?.data) {
        return cleanText(htmlToText(decode(payload.body.data), { wordwrap: false }));
    }

    return '';
};

function normalizeEmailBodies(emails) {
    return emails.map(email => ({
        ...email,
        body: email.body.replace(/\s+/g, ' ').trim()
    }));
}


const fetchRecentEmails = async (accessToken) => {
    const messages = await getMailsById(accessToken);

    const emails = [];
    for (let msg of messages) {
        const message = await getMessageDetail(accessToken, msg.id);
        const headers = message.payload.headers;

        const subject = headers.find(h => h.name === 'Subject')?.value || 'No Subject';
        const from = headers.find(h => h.name === 'From')?.value || 'Unknown';

        const plainTextBody = extractBody(message.payload);

        // console.log("From:", from);
        // console.log("\nSubject:", subject);
        // console.log("\nBody:\n", flattenEmailContent(plainTextBody));
        const body = flattenEmailContent(plainTextBody);
        const curEmail = {
            subject,
            from,
            body
        }

        emails.push(curEmail);
    }

    return normalizeEmailBodies(emails);
};

export default fetchRecentEmails;
