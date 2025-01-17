import navLogo from "../../assets/media/svg/nav-logo.svg"


export const NavLogoBtn = () => {
    return(
        <>
            <div className="logo-main-count">
                <a href="#A"><img src={navLogo} alt="" /></a>
            </div>
        </>
    )
}


export const NavLinks = () => {
    let navLinks =[
        {
            name:"Home",
            link:"",
        },
        {
            name:"About",
            link:"",
        },   {
            name:"Blog",
            link:"",
        },
        {
            name:"Contact",
            link:"",
        },
    ]
    return(
        <>
            <div className="row d-flex align-item-center justify-content-between py-2 px-3">
                {navLinks.map((value) => {
                    return(
                        <>
                          <div className="col-3">
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



export const MainBtn = () => {
    return(
        <>
        <div className="row">
            <div className="col-8">
                <button type="button" className="btn">5</button>
            </div>
            <div className="col-4">

            </div>
        </div>
        </>
    )
}