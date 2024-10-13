
import styles from './DashboardContent.module.css';
import PolicySection from './PolicySection';
import ClaimsSection from './ClaimsSection';
import PaymentsSection from './PaymentsSection';
import InsuranceGraphs from './InsuranceGraphs';  // Import the graphs section

const DashboardContent = () => {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.greeting}>
        <h2>Welcome back, Jhon!</h2>
      </div>
      <div className={styles.overview}>
        <span>Total Policies: 5</span>
        <span>Total Claims: 2</span>
        <span>Upcoming Payments: 1</span>
      </div>
      <PolicySection />
      <ClaimsSection />
      <PaymentsSection />
      <InsuranceGraphs />  {/* Add the graphs section here */}
    </div>
  );
};

export default DashboardContent;
