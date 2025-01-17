import { MainBtn, NavLinks, NavLogoBtn } from "./button";


const Navbar = () => {
    return(
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="row d-flex align-item-center justify-content-between">
                            <div className="b col-4">
                                <NavLogoBtn />
                            </div>
                            <div className="b col-4 align-item-center">
                                <NavLinks />
                            </div>
                            <div className="b col-4">
                                {/* <MainBtn /> */}
                            </div>
                        </div>                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Navbar};