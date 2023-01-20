import Image from "next/image"

export default function Copyright() {
	return <>
		<div className="flex-initial flex flex-col items-center pb-3">
		<Image
			src="/images/dsc-upd-logo.png"
			alt="Google Developer Student Clubs UP Diliman Stacked Logo"
			height={50}
			width={327.46}
		/>
		</div>
		<p className="text-xs">Ⓒ 2023 Google Developer Student Clubs UP Diliman.</p>
		<p className="text-xs">All Rights Reserved.</p>
	</>
}