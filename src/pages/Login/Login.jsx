import './Login.css';

function Login() {
    return (
        <main className="login">
            <div className="login-container">
                <header className="login-header">
                    <div className="header-background"></div>
                    <div className="header-content">
                        <div className="brand">
                            <h1 className="brand-name">BIDV</h1>
                            <img className="brand-logo"
                                src="https://c.animaapp.com/jRdnim9q/img/thi-t-k--ch-a-c--t-n--8--1@2x.png"
                                alt="BIDV Logo" />
                        </div>
                        <form className="search-form" role="search">
                            <div className="search-input-wrapper">
                                <img className="search-icon" src="https://c.animaapp.com/jRdnim9q/img/group@2x.png"
                                    alt="Search icon" />
                                <input type="search" placeholder="Search" className="search-input" />
                                <img className="dropdown-icon" src="https://c.animaapp.com/jRdnim9q/img/vector-723.svg"
                                    alt="Dropdown icon" />
                            </div>
                        </form>
                    </div>
                    <div className="user-greeting">
                        <img className="user-avatar" src="https://c.animaapp.com/jRdnim9q/img/carbon-user-avatar-filled-1.svg"
                            alt="User avatar" />
                        <p className="greeting-text">Chào mừng!<br />Nguyễn Ann Home</p>
                    </div>
                </header>


                <nav className="login-button">
                    <button className="login-btn" type="button" id="open-modal">
                        <span className="login-text">Đăng nhập</span>
                        <img className="login-icon" src="https://c.animaapp.com/jRdnim9q/img/vector-1.svg" alt="Login icon" />
                    </button>
                </nav>

                {/* Modal container */}
                <div id="modal" className="modal hidden">
                    <div className="modal-content">
                        <div className="input">
                            <div className="div">
                                <div className="overlap-group">
                                    <div className="m-t-kh-u">************</div>
                                    <div className="rectangle"></div>
                                    <div className="text-wrapper">Mật khẩu</div>
                                </div>
                                <img alt="line" className="line" src="https://c.animaapp.com/am0Xm916/img/line-4.svg" />
                                <img alt="line" className="lock" src="https://c.animaapp.com/am0Xm916/img/lock.svg" />
                                <img alt="line" className="eye" src="https://c.animaapp.com/am0Xm916/img/eye.svg" />
                                <img alt="line" className="img" src="img/line-5.svg" />
                            </div>
                            <div className="group">
                                <img className="x-circle" src="https://c.animaapp.com/am0Xm916/img/xcircle.svg" alt="Close" />
                                <img alt="line" className="vector" src="https://c.animaapp.com/am0Xm916/img/vector.svg" />
                                <p className="nguyen-ann-home">
                                    <span className="span"><br /></span> <span className="text-wrapper-2">Nguyen Ann Home</span>
                                </p>
                                <div className="text-wrapper-3">190******876</div>
                            </div>
                            <div className="DANG-NHAP">
                                <div className="button-small">
                                    <div className="frame">
                                        <a href="loginwithaccount.html">
                                            <button className="button" id="modal-login-button">ĐĂNG NHẬP</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <script src="script.js"></script>


                <section className="feature-grid">
                    <div className="feature-item transfer">
                        <img className="feature-icon" src="https://c.animaapp.com/jRdnim9q/img/proicons-arrow-swap-1.svg"
                            alt="Transfer icon" />
                    </div>
                    <div className="feature-item wallet">
                        <img className="feature-icon" src="https://c.animaapp.com/jRdnim9q/img/akar-icons-wallet-1.svg"
                            alt="Wallet icon" />
                    </div>
                    <div className="feature-item savings">
                        <img className="feature-icon" src="https://c.animaapp.com/jRdnim9q/img/tdesign-saving-pot-1.svg"
                            alt="Savings icon" />
                    </div>
                    <div className="feature-item shopping">
                        <img className="feature-icon" src="https://c.animaapp.com/jRdnim9q/img/icon-park-outline-shopping-1.svg"
                            alt="Shopping icon" />
                    </div>
                </section>
                <section className="quick-access">
                    <div className="quick-access-item">
                        <img className="quick-access-icon" src="https://c.animaapp.com/jRdnim9q/img/gg-qr-1.svg"
                            alt="QR code icon" />
                    </div>
                    <div className="quick-access-item">
                        <img className="quick-access-icon"
                            src="https://c.animaapp.com/jRdnim9q/img/tdesign-lighting-circle-filled-1.svg"
                            alt="Lighting icon" />
                    </div>
                    <div className="quick-access-item">
                        <img className="quick-access-icon" src="https://c.animaapp.com/jRdnim9q/img/pixelarticons-4g-1.svg"
                            alt="4G icon" />
                    </div>
                </section>
                <section className="additional-features">
                    <img className="feature-group" src="https://c.animaapp.com/jRdnim9q/img/group-3@2x.png"
                        alt="Feature group 1" />
                    <img className="feature-group" src="https://c.animaapp.com/jRdnim9q/img/group-4@2x.png"
                        alt="Feature group 2" />
                    <img className="feature-group" src="https://c.animaapp.com/jRdnim9q/img/group-3@2x.png"
                        alt="Feature group 3" />
                    <img className="feature-group" src="https://c.animaapp.com/jRdnim9q/img/group-4@2x.png"
                        alt="Feature group 4" />
                </section>
                <footer className="app-footer">
                    <nav className="footer-nav">
                        <a href="#home" className="nav-item home">
                            <img src="https://c.animaapp.com/jRdnim9q/img/house.svg" alt="Home icon" className="nav-icon" />
                            <span className="nav-text">Trang chủ</span>
                        </a>
                        <a href="#qr" className="nav-item qr">
                            <div className="qr-background">
                                <img src="https://c.animaapp.com/jRdnim9q/img/qrcode.svg" alt="QR code icon"
                                    className="nav-icon qr-icon" />
                            </div>
                        </a>
                        <a href="#notifications" className="nav-item notifications">
                            <img src="https://c.animaapp.com/jRdnim9q/img/bellsimple.svg" alt="Notifications icon"
                                className="nav-icon" />
                            <span className="nav-text">Thông báo</span>
                        </a>
                    </nav>
                </footer>
            </div>
        </main>
    )
}

export default Login