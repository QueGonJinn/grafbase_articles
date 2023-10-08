import { footerLinks } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';

type ColumnProps = {
	title: string;
	links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
	<div className="footer_column">
		<h4 className="font-semibold">{title}</h4>
		<ul className="flex flex-col gap-2 text-normal">
			{links.map((link) => (
				<Link key={link} href="/">
					{link}
				</Link>
			))}
		</ul>
	</div>
);
const Footer = () => {
	return (
		<footer className="flexStart footer">
			{/* <div className="flex flex-col gap-12 w-full">
				<div className="flex items-start flex-col">
					<Image
						src={'/logo.jpg'}
						alt={'logo'}
						width={43}
						height={43}
						className="rounded-full opacity-80"
					/>
					<p className="text-start text-sm font-normal mt-5 max-w-xs">
						Flexibble is the world&apos;s leading community for creatives to share, grow, and get
						hired.
					</p>
				</div>
			</div> */}
			<div className="flexBetween footer_copyright">
				<p>@ 2023 ArticlesApp. All rights reserved</p>
				<p className="text-gray ">
					<span className="text-black font-semibold">10,2014</span> articles published
				</p>
			</div>
		</footer>
	);
};

export default Footer;
