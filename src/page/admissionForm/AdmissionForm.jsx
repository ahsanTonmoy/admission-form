import { Input, Option, Select, Typography } from "@material-tailwind/react";
import Sectitle from "../../components/secTitle/Sectitle";
const AdmissionForm = () => {

    return (
        <div>
            <div className="px-10">
                <form>
                    {/* personal info */}
                    <div className=" capitalize">
                        {/* title */}
                        <Sectitle secTitle={'personal infometion'}></Sectitle>
                        {/* content */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-4">
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
                    {/* gardian info */}
                    <div className=" capitalize my-8">
                        {/* title */}
                        <Sectitle secTitle={'gardian infometion'}></Sectitle>
                        {/* content */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-4">
                            {/* fether name */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    fether&apos;s Name
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="fether's name"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* fether's nationality*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    fether&apos;s nationality
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="fether's nationality"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                />
                            </div>
                            {/* fether's mobile*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Mobile no
                                </Typography>
                                <Input
                                    type="tel"
                                    placeholder="fether's mobile number"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                />
                            </div>
                            <br></br>
                            {/* mother name */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    mother&apos;s Name
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="mother's name"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* mother's nationality*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    mother&apos;s nationality
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="mother's nationality"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* mother's mobile*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Mobile no
                                </Typography>
                                <Input
                                    type="tel"
                                    placeholder="mother's mobile number"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            <br></br>

                            {/* local gardian name */}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    local gardian&apos;s Name
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="local gardian's name"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* local gardian's nationality*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    reletionship
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="local gardian's reletionship"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            {/* local gardian's mobile*/}
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Mobile no
                                </Typography>
                                <Input
                                    type="tel"
                                    placeholder="local gardian's mobile number"
                                    name="Fname"
                                    required
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                />
                            </div>
                            <br></br>
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