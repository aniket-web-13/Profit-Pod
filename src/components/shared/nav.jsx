import { MainBtn, NavLinks, NavLogoBtn } from "./button";


const Navbar = () => {
    return(
        <>
            <nav>
                <div className="container">
                    <div className="">
                        <div className="row d-flex align-item-center justify-content-between">
                            <div className="b col-3">
                                <NavLogoBtn />
                            </div>
                            <div className="b col-4 align-item-center">
                                <NavLinks />
                            </div>
                            <div className="b col-3">
                                <MainBtn 
                                    btnName={"Get Started"}
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Navbar};