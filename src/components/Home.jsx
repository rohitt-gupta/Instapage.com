import React from "react";
import vg from "./../assets/2.webp";
import {
	AiFillGoogleCircle,
	AiFillAmazonCircle,
	AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
	return (
		<>
			<div className='home' id='home'>
				<main>
					<h1>InstaPage</h1>
					<p>Solution to all your problems.</p>
				</main>
			</div>
			<div className='home2'>
				<img src={vg} alt='Graphics' />
				<div>
					<p>
						We are your one and only solution to the tech problems you face
						everyday. We are leading tech company whose aim is to increase the
						problem solving ability in children
					</p>
				</div>
			</div>
			<div className='home3' id='about'>
				<div>
					<h1>Who we are?</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
						laoreet nisi quis dui feugiat, quis interdum velit facilisis.
						Vivamus in porta magna. Sed quis convallis magna. In vitae tincidunt
						mi. Donec ut dolor imperdiet, dignissim ante ut, mattis ex. Donec
						fermentum eget diam dignissim dictum. Suspendisse rutrum justo eget
						tortor vulputate maximus. Integer id blandit nisi, et tempor urna.
						Sed feugiat et nibh eu pellentesque. Cras elit tellus, mattis at
						dolor ac, sollicitudin molestie orci. Cras neque justo, placerat sit
						amet libero ac, vestibulum sodales orci. Curabitur quis arcu in diam
						elementum mattis et id est. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Cras vel purus in nisl gravida sagittis.
						Sed eros elit, vestibulum eu tristique ut, venenatis nec diam. Nam
						tortor risus, placerat non aliquet eget, vehicula semper purus.
						Maecenas nec vulputate tortor. Maecenas vitae dolor dui. Vivamus
						vulputate, leo sit amet rutrum feugiat, mi dui luctus erat, mollis
						vehicula nibh odio non augue. Aliquam laoreet arcu a condimentum
						porta. Sed commodo ultricies quam, et lacinia mi varius at. In nec
						commodo tortor, nec imperdiet massa. Mauris diam neque, pretium ut
						justo eget, commodo mattis ante. Nullam vel nulla a nunc tristique
						luctus sit amet vel nunc.
					</p>
				</div>
			</div>
			<div className='home4' id='brands'>
				<div>
					<h1>Brands</h1>
					<article>
						<div
							style={{
								animationDelay: "0.3s",
							}}
						>
							<AiFillGoogleCircle />
							<p>Google</p>
						</div>
						<div
							style={{
								animationDelay: "0.5s",
							}}
						>
							<AiFillAmazonCircle />
							<p>Amazon</p>
						</div>
						<div
							style={{
								animationDelay: "0.7s",
							}}
						>
							<AiFillYoutube />
							<p>Youtube</p>
						</div>
						<div
							style={{
								animationDelay: "1.0s",
							}}
						>
							<AiFillInstagram />
							<p>Instagram</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
