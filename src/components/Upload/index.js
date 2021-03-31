import React from 'react';

const Upload = () => {
	return (
		<div className="pg-upload-wrap">
			<form className="pg-upload-form">

			<label class="pg-upload-label">
				<i class="pgicon pg-upload"></i>
				<span class="pg-upload-title">
					Add File
				</span>
				<input class="pg-upload-input" type="file"/>
			</label>
			<button type="submit" className="pg-button pg-upload-button pg-success-button">Upload</button>
			</form>
		</div>
	);
};

export default Upload;
