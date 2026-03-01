import { Header, StatsCard, TripCard } from "~/components";

const Dashboard = () => {
	const dashboardStats = {
		totalUsers: 1237,
		usersJoined: { currentMonth: 218, lastMonth: 176 },
		totalTrips: 118,
		tripsCreated: { currentMonth: 6, lastMonth: 2 },
		userRole: { total: 62, currentMonth: 63, lastMonth: 78 },
	};

	const allTrips = [
		{
			id: 1,
			name: "Tropical Rewind",
			imageUrls: ["/assets/images/sample1.jpg"],
			itinerary: [{ location: "Thailand" }],
			tags: ["Adventure", "Culture"],
			travelStyle: "Solo",
			estimatedPrice: "$1,000",
		},
		{
			id: 2,
			name: "French Reverie",
			imageUrls: ["/assets/images/sample2.jpg"],
			itinerary: [{ location: "Paris" }],
			tags: ["Relaxation", "Culinary"],
			travelStyle: "Family",
			estimatedPrice: "$2,000",
		},
		{
			id: 3,
			name: "Zen Break",
			imageUrls: ["/assets/images/sample3.jpg"],
			itinerary: [{ location: "Japan" }],
			tags: ["Shopping", "Luxury"],
			travelStyle: "Couple",
			estimatedPrice: "$3,000",
		},
		{
			id: 4,
			name: "Adventure in Westeros",
			imageUrls: ["/assets/images/sample4.jpg"],
			itinerary: [{ location: "Croatia" }],
			tags: ["Historical", "Culture"],
			travelStyle: "Friends",
			estimatedPrice: "$4,000",
		},
	];

	return (
		<main className="dashboard wrapper">
			<Header
				title="Welcome User"
				description="Track activity, trends and popular destinations in real time"
			/>

			<section className="flex flex-col gap-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
					<StatsCard
						headerTitle="Total Users"
						total={dashboardStats.totalUsers}
						currentMonthCount={dashboardStats.usersJoined.currentMonth}
						lastMonthCount={dashboardStats.usersJoined.lastMonth}
					/>
					<StatsCard
						headerTitle="Total Trips"
						total={dashboardStats.totalTrips}
						currentMonthCount={dashboardStats.tripsCreated.currentMonth}
						lastMonthCount={dashboardStats.tripsCreated.lastMonth}
					/>
					<StatsCard
						headerTitle="Active Users"
						total={dashboardStats.userRole.total}
						currentMonthCount={dashboardStats.userRole.currentMonth}
						lastMonthCount={dashboardStats.userRole.lastMonth}
					/>
				</div>
			</section>

			<section className="container">
				<h1 className="text-xl font-semibold text-dark-100">Created trips</h1>

				<div className="trip-grid">
					{allTrips
						.slice(0, 4)
						.map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
							<TripCard
								key={id}
								id={id.toString()}
								name={name}
								imageUrl={imageUrls[0]}
								location={itinerary?.[0]?.location ?? ""}
								tags={tags}
								price={estimatedPrice}
							/>
						))}
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
