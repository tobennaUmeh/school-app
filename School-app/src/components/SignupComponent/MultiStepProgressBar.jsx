import React from 'react';
import './MultiStepProgressBar.css';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { Check } from 'react-bootstrap-icons';

const MultiStepProgressBar = (props) => {
	var stepPercentage = 0;

	if (props.currentStep === 1) {
		stepPercentage = 0;
	} else if (props.currentStep === 2) {
		stepPercentage = 50;
	} else if (props.currentStep >= 3) {
		stepPercentage = 100;
	} else {
		stepPercentage = 0;
	}

	return (
		<div className=' my-3'>
			<div className='mul'>
				<ProgressBar percent={stepPercentage}>
					<Step>
						{({ accomplished, index }) => (
							<div>
								<div
									className={`indexedStep ${
										accomplished ? 'accomplished' : null
									}`}
								>
									{accomplished ? <Check /> : index + 1}
								</div>
							</div>
						)}
					</Step>
					<Step>
						{({ accomplished, index }) => (
							<div
								className={`indexedStep ${
									accomplished ? 'accomplished' : null
								}`}
							>
								{accomplished ? <Check /> : index + 1}
							</div>
						)}
					</Step>
					<Step>
						{({ accomplished, index }) => (
							<div
								className={`indexedStep ${
									accomplished ? 'accomplished' : null
								}`}
							>
								{accomplished ? <Check /> : index + 1}
							</div>
						)}
					</Step>
				</ProgressBar>
			</div>

			<div className='d-flex my-3 justify-content-between MultiStepLabel pt-3'>
				<small className='text-muted'>Personal Info</small>
				<small className='text-muted'>Business Info </small>
				<small className='text-muted'>
					Account Info <br /> (optional)
				</small>
			</div>
		</div>
	);
};

export default MultiStepProgressBar;
