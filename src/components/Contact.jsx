import React from "react";

const Contact = () => {
	return (
		<div className='contact'>
			<main>
				<h1>Contact Us</h1>

				<form action=''>
					<div>
						<label htmlFor=''>Name</label>
						<input type='text' required placeholder='abc' />
					</div>
					<div>
						<label htmlFor=''>Email</label>
						<input type='email' required placeholder='abc@xyz.com' />
					</div>
					<div>
						<label htmlFor=''>Message</label>
						<input
							type='text'
							required
							placeholder='Tell Us about your query...'
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</main>
		</div>
	);
};

export default Contact;
