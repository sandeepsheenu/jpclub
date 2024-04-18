

// // import React from 'react';
// // import { useQuery, gql } from '@apollo/client';
// // import '../css/dashboard.css';
// // import { PieChart } from '@mui/x-charts/PieChart';

// // const TOTAL_MEMBERS_QUERY = gql`
// //   query TotalMembers {
// //     jpnagar_aggregate {
// //       aggregate {
// //         totalCount: count
// //       }
// //     }
// //   }
// // `;

// // const TOTAL_PENDING_AMOUNT_QUERY = gql`
// //   query TotalPendingAmount {
// //     jpnagar_aggregate {
// //       aggregate {
// //         sum {
// //           amount: Pending_Amount
// //         }
// //       }
// //     }
// //   }
// // `;

// // const TOTAL_VOTED_2018 = gql`
// //   query TotalVoted2018 {
// //     votedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq: TRUE}}) {
// //       aggregate {
// //         voted: count
// //       }
// //     }
// //     nonVotedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq: FALSE}}) {
// //       aggregate {
// //         nonvoted: count
// //       }
// //     }
// //   }
// // `;

// // const Dashboard = () => {
// //   const { loading: loadingMembers, error: errorMembers, data: membersData } = useQuery(TOTAL_MEMBERS_QUERY);
// //   const { loading: loadingPending, error: errorPending, data: pendingData } = useQuery(TOTAL_PENDING_AMOUNT_QUERY);
// //   const { loading: loadingAgmCount, error: errorAgmCount, data: agm2018Data } = useQuery(TOTAL_VOTED_2018);

// //   if (loadingMembers || loadingPending || loadingAgmCount) return <p>Loading...</p>;
// //   if (errorMembers || errorPending || errorAgmCount) return <p>Error: {errorMembers || errorPending || errorAgmCount}</p>;

// //   return (
// //     <div className="dashboard">
// //       <div className="box">
// //         <h2>Total Members</h2>
// //         <p>{membersData.jpnagar_aggregate.aggregate.totalCount}</p>
// //       </div>
// //       <div className="box">
// //         <h2>Primary Members</h2>
// //         {/* Render primary members data here */}
// //       </div>
// //       <div className="box">
// //         <h2>Total Pending Balance</h2>
// //         <p>{pendingData.jpnagar_aggregate.aggregate.sum.amount}</p>
// //         {/* Render total pending balance data here */}
// //       </div>

      
// //     </div>
// //     <PieChart
// //     series={[
// //       {
// //         data: [
// //           { id: 0, value: agm2018Data.votedCount.aggregate.voted, label: 'Voted 2018' },
// //           { id: 1, value: agm2018Data.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2018' },
// //           {id:3,label:'total:'},
// //         ],
// //       },
// //     ]}
// //     width={400}
// //     height={200}
// //   />
// //   );
// // };

// // export default Dashboard;


// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import '../css/dashboard.css';
// import { PieChart } from '@mui/x-charts/PieChart';

// const TOTAL_MEMBERS_QUERY = gql`
//   query TotalMembers {
//     jpnagar_aggregate {
//       aggregate {
//         totalCount: count
//       }
//     }
//   }
// `;

// const TOTAL_PENDING_AMOUNT_QUERY = gql`
//   query TotalPendingAmount {
//     jpnagar_aggregate {
//       aggregate {
//         sum {
//           amount: Pending_Amount
//         }
//       }
//     }
//   }
// `;

// const TOTAL_VOTED_2018 = gql`
//   query TotalVoted2018 {
//     votedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq: TRUE}}) {
//       aggregate {
//         voted: count
//       }
//     }
//     nonVotedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq:FALSE }}) {
//       aggregate {
//         nonvoted: count
//       }
//     }
//   }
// `;




// const TOTAL_VOTED_2019 = gql`
// query {
//   votedCount: accountagm_aggregate(where: {agm2_15t_dec_19 : {_eq: TRUE}}) {
//     aggregate {
//       voted:count
//     }
//   }
//   nonVotedCount: accountagm_aggregate(where: {agm2_15t_dec_19 : {_eq: FALSE}}) {
//     aggregate {
//       nonvoted:count
//     }
//   }
// }
// `


// const TOTAL_VOTED_2021 = gql`
// query {
//   votedCount: accountagm_aggregate(where: {agm3_2021  : {_eq: TRUE}}) {
//     aggregate {
//       voted:count
//     }
//   }
//   nonVotedCount: accountagm_aggregate(where: {agm3_2021  : {_eq: FALSE}}) {
//     aggregate {
//       nonvoted:count
//     }
//   }
// }
// `

// const Dashboard = () => {
//   const { loading: loadingMembers, error: errorMembers, data: membersData } = useQuery(TOTAL_MEMBERS_QUERY);
//   const { loading: loadingPending, error: errorPending, data: pendingData } = useQuery(TOTAL_PENDING_AMOUNT_QUERY);
//   const { loading: loadingAgmCount, error: errorAgmCount, data: agm2018Data } = useQuery(TOTAL_VOTED_2018);
//   const { loading: loadingAgmCount2019, error: errorAgmCount2019, data: agmData2019 } = useQuery(TOTAL_VOTED_2019);
//   const { loading: loadingAgmCount2021, error: errorAgmCount2021, data: agmData2021 } = useQuery(TOTAL_VOTED_2021);

//   if (loadingMembers || loadingPending || loadingAgmCount || loadingAgmCount2019 || loadingAgmCount2021) return <p>Loading...</p>;
//   if (errorMembers || errorPending || errorAgmCount ||errorAgmCount2019 || errorAgmCount2021) return <p>Error: {errorMembers || errorPending || errorAgmCount ||errorAgmCount2019 ||errorAgmCount2021}</p>;

//   return (
//     <div className="dashboard">
//       <div className="box">
//         <h2>Total Members</h2>
//         <p>{membersData.jpnagar_aggregate.aggregate.totalCount}</p>
//       </div>
//       <div className="box">
//         <h2>Primary Members</h2>
//         {/* Render primary members data here */}
//       </div>
//       <div className="box">
//         <h2>Total Pending Balance</h2>
//         <p>{pendingData.jpnagar_aggregate.aggregate.sum.amount}</p>
//         {/* Render total pending balance data here */}
//       </div>

//       {/* Render PieChart component here */}
//       <PieChart
//         series={[
//           {
//             data: [
//               { id: 0, value: agm2018Data.votedCount.aggregate.voted, label: 'Voted 2018' },
//               { id: 1, value: agm2018Data.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2018' },
//             ],
//           },
//         ]}
//         width={400}
//         height={200}
//       />

// <PieChart
//         series={[
//           {
//             data: [
//               { id: 0, value: agmData2019.votedCount.aggregate.voted, label: 'Voted 2019' },
//               { id: 1, value: agmData2019.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2019' },
//             ],
//           },
//         ]}
//         width={400}
//         height={200}
//       />


// <PieChart
//         series={[
//           {
//             data: [
//               { id: 0, value: agmData2021.votedCount.aggregate.voted, label: 'Voted 2021' },
//               { id: 1, value: agmData2021.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2021' },
//             ],
//           },
//         ]}
//         width={400}
//         height={200}
//       />      
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../css/dashboard.css';
import { PieChart } from '@mui/x-charts/PieChart';

const TOTAL_MEMBERS_QUERY = gql`
  query TotalMembers {
    jpnagar_aggregate {
      aggregate {
        totalCount: count
      }
    }
  }
`;

const TOTAL_PENDING_AMOUNT_QUERY = gql`
  query TotalPendingAmount {
    jpnagar_aggregate {
      aggregate {
        sum {
          amount: Pending_Amount
        }
      }
    }
  }
`;

const TOTAL_VOTED_2018 = gql`
  query TotalVoted2018 {
    votedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq: TRUE}}) {
      aggregate {
        voted: count
      }
    }
    nonVotedCount: accountagm_aggregate(where: {agm1_4_mar_18: {_eq: FALSE}}) {
      aggregate {
        nonvoted: count
      }
    }
  }
`;

const TOTAL_VOTED_2019 = gql`
  query TotalVoted2019 {
    votedCount: accountagm_aggregate(where: {agm2_15t_dec_19: {_eq: TRUE}}) {
      aggregate {
        voted: count
      }
    }
    nonVotedCount: accountagm_aggregate(where: {agm2_15t_dec_19: {_eq: FALSE}}) {
      aggregate {
        nonvoted: count
      }
    }
  }
`;

const TOTAL_VOTED_2021 = gql`
  query TotalVoted2021 {
    votedCount: accountagm_aggregate(where: {agm3_2021: {_eq: TRUE}}) {
      aggregate {
        voted: count
      }
    }
    nonVotedCount: accountagm_aggregate(where: {agm3_2021: {_eq: FALSE}}) {
      aggregate {
        nonvoted: count
      }
    }
  }
`;

const Dashboard = () => {
  const { loading: loadingMembers, error: errorMembers, data: membersData } = useQuery(TOTAL_MEMBERS_QUERY);
  const { loading: loadingPending, error: errorPending, data: pendingData } = useQuery(TOTAL_PENDING_AMOUNT_QUERY);
  const { loading: loadingAgmCount, error: errorAgmCount, data: agm2018Data } = useQuery(TOTAL_VOTED_2018);
  const { loading: loadingAgmCount2019, error: errorAgmCount2019, data: agmData2019 } = useQuery(TOTAL_VOTED_2019);
  const { loading: loadingAgmCount2021, error: errorAgmCount2021, data: agmData2021 } = useQuery(TOTAL_VOTED_2021);

  if (loadingMembers || loadingPending || loadingAgmCount || loadingAgmCount2019 || loadingAgmCount2021) return <p>Loading...</p>;
  if (errorMembers || errorPending || errorAgmCount || errorAgmCount2019 || errorAgmCount2021) return <p>Error: {errorMembers || errorPending || errorAgmCount || errorAgmCount2019 || errorAgmCount2021}</p>;

  return (
    <div className="dashboard">
      <div className="boxes">
        <div className="box">
          <h2>Total Members</h2>
          <p>{membersData.jpnagar_aggregate.aggregate.totalCount}</p>
        </div>
        <div className="box">
          <h2>Primary Members</h2>
          {/* Render primary members data here */}
        </div>
        <div className="box">
          <h2>Total Pending Balance</h2>
          <p>{pendingData.jpnagar_aggregate.aggregate.sum.amount}</p>
          {/* Render total pending balance data here */}
        </div>
      </div>

      {/* Render PieChart components below */}
      
      <div className="charts">
        <PieChart
        colors={['red', 'blue', 'green']}
          series={[
            {
              data: [
                { id: 0, value: agm2018Data.votedCount.aggregate.voted, label: 'Voted 2018',color: 'blue' },
                { id: 1, value: agm2018Data.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2018',color: 'green'  },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: agmData2019.votedCount.aggregate.voted, label: 'Voted 2019',color: 'blue' },
                { id: 1, value: agmData2019.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2019',color: 'green' },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: agmData2021.votedCount.aggregate.voted, label: 'Voted 2021' ,color: 'blue'},
                { id: 1, value: agmData2021.nonVotedCount.aggregate.nonvoted, label: 'Not Voted 2021',color: 'green' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Dashboard;
