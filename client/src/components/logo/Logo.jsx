
import './logo.css';


const Logo = () => {

    return (
        <section>
            <div id="last">
                <div id="last-l">
                    <div className="letter-l" id="last-long"></div>
                    <div className="letter-l" id="last-small"></div>
                </div>
                <div className="suffix" id="last-ast">
                    <div className="text">
                        ast
                    </div>
                </div>
            </div>
            <div id="line">
                <div id="line-l">
                    <div className="letter-l" id="line-long"></div>
                    <div className="letter-l" id="line-small"></div>
                </div>
                <div className="suffix" id="line-ine">
                    <div className="text">
                        ine
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logo;