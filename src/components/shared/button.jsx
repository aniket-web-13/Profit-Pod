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
            <div className="nav-links d-flex">
                {navLinks.map((value) => {
                    return(
                        <>
                           <div className="nl-name">
                                <p>{value.name}</p>
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
        
        </>
    )
}