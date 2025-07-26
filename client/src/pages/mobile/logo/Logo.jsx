
import './logo.css';


const Logo = () => {

    return (
        <section id="mobile-section">
            <div id="mobile-last">
                <div id="mobile-last-l">
                    <div className="mobile-letter-l" id="mobile-last-long"></div>
                    <div className="mobile-letter-l" id="mobile-last-small"></div>
                </div>
                <div className="mobile-suffix" id="mobile-last-ast">
                    <div className="mobile-text">
                        ast
                    </div>
                </div>
            </div>
            <div id="mobile-line">
                <div id="mobile-line-l">
                    <div className="mobile-letter-l" id="mobile-line-long"></div>
                    <div className="mobile-letter-l" id="mobile-line-small"></div>
                </div>
                <div className="mobile-suffix" id="mobile-line-ine">
                    <div className="mobile-text">
                        ine
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logo;