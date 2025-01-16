import { MainBtn, NavLinks, NavLogoBtn } from "./button";


const Navbar = () => {
    return(
        <>
            <nav>
                <div className="container">
                    <div className="nav-count d-flex">
                        <NavLogoBtn /> 
                        <NavLinks />
                        <MainBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Navbar};