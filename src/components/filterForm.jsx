import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { useState } from "react";

const FilterForm = () => {
	const SPORTS = [
		{ label: "CRICKET", value: "option_1" },
		{ label: "FOOTBALL", value: "option_2" },
		{ label: "BASKETBALL", value: "option_3" },
		{ label: "TENNIS", value: "option_4" },
		{ label: "VOLLYBALL", value: "option_5" },
	];

	const DAYS = [
		{ label: "Monday", value: "option_1" },
		{ label: "Tuesday", value: "option_2" },
		{ label: "Wednessday", value: "option_3" },
		{ label: "Thursday", value: "option_4" },
		{ label: "Friday", value: "option_1" },
		{ label: "Satarday", value: "option_2" },
		{ label: "Sunday", value: "option_3" },
	];

	const validationSchema = Yup.object().shape({
		sports: Yup.string().required(),
		day: Yup.string().required(),
		time: Yup.string().required(),
		location: Yup.string().required(),
	});

	const initialValues = {
		sports: "",
		fromtime: "",
		totime: "",
		day: "",
		location: "",
	};

	const handleSubmit = (values) => {
		console.log("Input Values", values);
	};

	const [valueSports, setvalueSports] = useState("");
	const [valueDays, setvalueDays] = useState("");

	const handleOnchangeSports = (val) => {
		setvalueSports(val);
	};
	const handleOnchangeDays = (val) => {
		setvalueDays(val);
	};

	const [filterPlayer, setFilterPlayer] = useState();
	const handleFilterChange = () => {};

	const formik = useFormik({ initialValues, onSubmit: handleSubmit });

	return (
		<>
			<form style={{ padding: "2rem" }} onSubmit={formik.handleSubmit}>
				<div className="container p-3">
					<div className="row justify-content-start">
						<div className="col-11 form-group p-2">
							<label>Sport</label>
							<select
								className="form-select"
								aria-label="Default select example"
								onChange={(e) => {
									setvalueSports(e.target.value);
								}}
							>
								<option selected>Open this select menu</option>
								{SPORTS.map((row, index) => {
									return (
										<option key={index} value={row.value}>
											{row.label}
										</option>
									);
								})}
							</select>

							{/* {error ? <ErrorMessage /> : null} */}
						</div>
						<div className="col-11 form-group p-2">
							<label>Day</label>
							<select
								className="form-select"
								aria-label="Default select example"
								onChange={handleFilterChange}
							>
								<option selected>Open this select menu</option>
								{DAYS.map((row, index) => {
									return (
										<option key={index} value={row.value}>
											{row.label}
										</option>
									);
								})}
							</select>

							{/* <ErrorMessage /> */}
						</div>
						<div className="col-11 p-2" style={{ paddingRight: "3rem" }}>
							<label>From</label>
							<input
								className="form-control"
								type="time"
								name="formtime"
								onChange={handleFilterChange}
							/>
							{/* <ErrorMessage /> */}
						</div>
						<div className="col-11 form-group p-2">
							<label>To</label>
							<input
								className="form-control"
								type="time"
								name="totime"
								onChange={handleFilterChange}
							/>
							{/* <ErrorMessage /> */}
						</div>
						<div className="col-11 form-group p-2">
							<label>Place</label>
							<input
								className="form-control"
								type="text"
								onChange={handleFilterChange}
							/>
							{/* <ErrorMessage /> */}
						</div>
						<div className="col-11">
							<Button
								type="submit"
								color="primary"
								variant="contained"
								sx={{ marginTop: "2rem" }}
							>
								Submit
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default FilterForm;
