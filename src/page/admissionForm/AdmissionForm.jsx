import { Input, Option, Select, Typography } from "@material-tailwind/react";
import Sectitle from "../../components/secTitle/Sectitle";
const AdmissionForm = () => {

    return (
        <div>
            <div className="px-10">
                <form>
                    {/* personal info */}
                    <div className="">
                        {/* title */}
                        <Sectitle secTitle={'personal infometion'}></Sectitle>
                        {/* content */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* f name */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    first Name
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="first name"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* l name */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    last Name
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="last name"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* date of birth */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    date of birth
                                </Typography>
                                <Input
                                    type="date"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* nationality */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    nationality
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="nationality"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* rilegion */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    religion
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="religion"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* gender */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    gender
                                </Typography>
                                <div className="">
                                    <Select label="Select Version">
                                        <Option>male</Option>
                                        <Option>female</Option>
                                        <Option>others</Option>
                                    </Select>
                                </div>
                            </div>
                            {/*  birth certificate no */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    birth certificate no.
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder=" birth certificate"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* present add */}
                            <div className="mb-1 col-span-2">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    present address
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="present address"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* l name */}
                            <div className="mb-1 col-span-2">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    permanent address
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="permanent address"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;