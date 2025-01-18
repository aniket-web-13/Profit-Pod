import { MainBtn } from "./button"
import { HeroHead } from "./headingComp"

export const Header = () => {
    return (
        <>
            <section>
                <div className="py-5 b">
                    <div className="px-4">
                        <div className="container">
                            <hgroup>
                                <div className="row">
                                    <div className="col-6 b">
                                        <div className="row d-flex flex-column align-items-start justify-content-center gap-4">
                                            <div className="col">
                                                <HeroHead />
                                            </div>
                                            <div className="col-4">
                                                <MainBtn
                                                    btnName={"Get Started"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 b"></div>
                                </div>
                            </hgroup>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}