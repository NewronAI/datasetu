import DashboardLayout from "@/components/layouts/DashboardLayout";
import FilesUploadSelector from "@/components/CSVUploadSelector";
import {useRouter} from "next/router";
import {data} from "autoprefixer";

const tableData = [
    {
        createdBy: "Shubham Shekhar",
        createdAt: "2023-01-01",
        name: "54421.csv",
        status: "Pending",
        assignedTo: "Shweta",
    },
    {
        createdBy: "Anshul Sharma",
        createdAt: "2023-01-01",
        name: "24421.csv",
        status: "Pending",
        assignedTo: "Nihar Desai",
    },
    {
        createdBy: "Shubham Shekhar",
        createdAt: "2023-01-01",
        name: "54421.csv",
        status: "Pending",
        assignedTo: "Nihar Desai",
    },
    {
        createdBy: "John Doe",
        createdAt: "2021-01-01",
        name: "54421.csv",
        status: "Pending",
        assignedTo: "John Doe",
    },
    {
        createdBy: "Jane Doe",
        createdAt: "2021-01-01",
        name: "54421.csv",
        status: "Pending",
        assignedTo: "John Doe",
    },
    ];

const CreateNewIntraPair = () => {

    const router = useRouter();

    const onCancel = () => {
        router.push("/intra");
    }

    const onDatasetImported = (d : any) => {

    }

    return (
        <DashboardLayout currentPage={"intra check"} secondaryNav={<></>}>

            <div>
                <div className={"pl-4"}>
                    <h1 className={"text-xl font-semibold"}>
                        Create New Intra Pair Task
                    </h1>
                    <p>
                        Create a new Intra Pair task by uploading a CSV file.
                    </p>
                </div>


                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flow-root">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-3">
                                            Created by
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                            Assigned to
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="">
                                    {tableData.map((tData, personIdx) => (
                                        <tr key={tData.name} >
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3">
                                                {tData.createdBy}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tData.createdAt}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tData.name}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tData.status}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tData.assignedTo}</td>
                                            {/*<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">*/}
                                            {/*    <a href="api/v1/intra#" className="text-indigo-600 hover:text-indigo-900">*/}
                                            {/*        Edit<span className="sr-only">, {tData.name}</span>*/}
                                            {/*    </a>*/}
                                            {/*</td>*/}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </DashboardLayout>
    )
}

export default CreateNewIntraPair;