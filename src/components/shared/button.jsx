import navLogo from "../../assets/media/svg/nav-logo.svg"
import playBtn from "../../assets/media/svg/paly-button.svg"

export const NavLogoBtn = () => {
    return (
        <>
            <div className="logo-main-count">
                <a href="#A"><img src={navLogo} alt="" /></a>
            </div>
        </>
    )
}


export const NavLinks = () => {
    let navLinks = [
        {
            name: "Home",
            link: "",
        },
        {
            name: "About",
            link: "",
        }, {
            name: "Blog",
            link: "",
        },
        {
            name: "Contact",
            link: "",
        },
    ]
    return (
        <>
            <div className="row d-flex align-item-center justify-content-between py-2 px-3">
                {navLinks.map((value) => {
                    return (
                        <>
                            <div className="col-3 text-center">
                                <ul className="m-0 p-0">
                                    <li><p>{value.name}</p></li>
                                </ul>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}



export const MainBtn = ({ btnName }) => {
    return (
        <>
            <div className="row">
                <div className="col-7">
                    <button type="button" className="btn">{btnName}</button>
                </div>
                <div className="col text-left">
                    <div className="rounded-circle d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}