import PinkButton from "./buttons/pinkbutton"

const Links = () => {
    return (
        <div className="flex flex-row gap-2 mx-auto xl:mx-0">
            <div className="flex flex-col gap-2">
                <PinkButton href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc58a9c076B45D219FA6632882F708DE090178897">
                    UNISWAP
                </PinkButton>
                <PinkButton href="https://www.dextools.io/app/en/ether/pair-explorer/0x9ac29ac01023ab829aa8e3cdecd1336e58bef2ce">
                    DEXTOOLS
                </PinkButton>
            </div>
            <div className="flex flex-col gap-2">
                <PinkButton href="https://t.me/tiggerportal">
                    TELEGRAM
                </PinkButton>
                <PinkButton href="https://twitter.com/tiggertoken">
                    TWITTER
                </PinkButton>
            </div>
        </div>
    )
}

export default Links