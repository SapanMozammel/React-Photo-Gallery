import React from 'react';

const Upload = () => {
	return (
		<div className="pg-upload-wrap">
			<form className="pg-upload-form">

			<label className="pg-upload-label">
				<i className="pgicon pg-upload"></i>
				<span className="pg-upload-title">
					Add File
				</span>
				<input className="pg-upload-input" type="file"/>
			</label>
			<button type="submit" className="pg-button pg-upload-button pg-success-button">Upload</button>
			</form>
		</div>
	);
};

export default Upload;
