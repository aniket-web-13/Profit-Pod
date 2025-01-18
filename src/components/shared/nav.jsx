import { MainBtn, NavLinks, NavLogoBtn } from "./button";


const Navbar = () => {
    return(
        <>
            <nav className="p-4">
                <div className="container">
                    <div className="">
                        <div className="row d-flex align-item-center justify-content-between">
                            <div className="b col-2">
                                <NavLogoBtn />
                            </div>
                            <div className="b col-4 align-items-center justify-content-between">
                                <NavLinks />
                            </div>
                            <div className="b col-2">
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