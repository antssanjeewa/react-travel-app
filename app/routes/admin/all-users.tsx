import { Header } from "~/components";
import { formatDate } from "~/lib/utils";

const AllUsers = () => {
	const users = [
		{
			id: 1,
			name: "John Doe",
			email: "john.doe@example.com",
			imageUrl: "/assets/images/david.webp",
			dateJoined: formatDate("2025-01-01"),
			itineraryCreated: 10,
			status: "user",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			imageUrl: "/assets/images/david.webp",
			dateJoined: formatDate("2025-01-02"),
			itineraryCreated: 4,
			status: "user",
		},
		{
			id: 3,
			name: "John Smith",
			email: "john.smith@example.com",
			imageUrl: "/assets/images/david.webp",
			dateJoined: formatDate("2025-01-03"),
			itineraryCreated: 8,
			status: "admin",
		},
	];

	return (
		<main className="dashboard wrapper">
			<Header title="Trips Page" description="Track users" />
			All Users
		</main>
	);
};

export default AllUsers;
