import ContactInfo from "./ContactInfo"
import FastLinks from "./FastLinks"
import FooterBottomLine from "./FooterBottomLine"
import FooterQuote from "./FooterQuote"

export default function Footer() {

    return (
        <footer className="bg-[#f1f5f9] w-full flex justify-center mt-[64px]">
            <div className="w-[1290px] p-[32px_16px] flex flex-col gap-[32px]">
                <div className="flex justify-between w-full">
                    <FooterQuote />
                    <FastLinks />
                    <ContactInfo />
                </div>
                <FooterBottomLine />
            </div>
        </footer>)
}
