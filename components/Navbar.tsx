import { NavLinks } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';

const Navbar = () => {
	const session = {};
	return (
		<>
			<nav className="flexBetween navbar">
				<div className="flex-1 flexStart gap-10">
					<Link href="/" className="flex flex-row gap-2 items-center">
						<Image src={'/logo.jpg'} alt={'logo'} width={43} height={43} className="rounded-full" />
						<span className="font-bold text-2xl">ArticlesApp</span>
					</Link>
					<ul className="xl:flex hidden text-small gap-7">
						{NavLinks.map((link) => (
							<Link key={link.key} href={link.href}>
								{link.text}
							</Link>
						))}
					</ul>
				</div>

				<div className="flexCenter gap-4">
					{session ? (
						<>
							UserPhoto
							<Link href="/create-project">ShareWork</Link>
						</>
					) : (
						<AuthProviders />
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
