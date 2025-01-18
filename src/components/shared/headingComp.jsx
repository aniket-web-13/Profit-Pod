export const HeroHead = () => {
    const hhImg = [
        {
            src: "https://cdn.prod.website-files.com/6735bf36bb4970dd716af586/6735d9b69813da873381e6a6_Hero%20Image%205.png"
        },
        {
            src: "https://cdn.prod.website-files.com/6735bf36bb4970dd716af586/6735d9b73cd18be5a1e64bca_Hero%20Image%207.webp"
        },
        {
            src: "https://cdn.prod.website-files.com/6735bf36bb4970dd716af586/6735d9b65717d8f943366ff2_Hero%20Image%206.png"
        },
    ]
    return (
        <>
            <h1 className="display-3 text-uppercase">Your podcast adventure starts</h1>
            <div className="row gap-3">
                <div className="col-12 d-flex flex-row align-items-center justify-content-start gap-1">
                    {hhImg.map((value, i) => {
                        return (
                            <>
                                <img style={{ width: "60px" }} className="" src={value.src} alt="" />
                            </>
                        )
                    })}
                    <h1 className="display-3 text-uppercase">here</h1>
                </div>
                <div className="col"> <p>Donec convallis ut blandit ultricies metus gravida vitae. Quis ornare arcu lacus sed nullam sagittis sagittis. Viverra convallis velit dolor mauris nec .</p></div>
            </div>
        </>
    )
}