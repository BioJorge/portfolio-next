import { Suspense } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  recentTransactions: React.ReactNode;
  revenueMetrics: React.ReactNode;
  userAnalytics: React.ReactNode;
};

export default function DashboardLayout({
  children,
  recentTransactions,
  revenueMetrics,
  userAnalytics,
}: DashboardLayoutProps) {
  return (
    <div className="m-4">
      <div className="flex align-start h-full">
        <div className="flex flex-col justify-between align-center flex-1 h-full">
          {/*
            Using slots, via paralel routing, 
            to render the RevenueMetrics and UserAnalytics components.

            Coulda been done with react components as well

            Using slots, via paralel routing, is better cus:
            - each slots can have its own loading and error files
            - provides a better separation of concerns and granular control
            See image (parallel route eg) inside explations folder for example
            */}
          <Suspense fallback={<div>Loading Revenue Metrics...</div>}>
            {revenueMetrics}
          </Suspense>
          <Suspense fallback={<div>Loading User Analytics...</div>}>
            {userAnalytics}
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading Recent Transactions...</div>}>
          {recentTransactions}
        </Suspense>
      </div>
      {children}
    </div>
  );
}
