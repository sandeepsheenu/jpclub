import { gql } from '@apollo/client';

// export const GET_MEMBERS = gql`
//   query GetMembers {
//     members {
//       memberid
//       membershiptype
//       name
//       phonenumber
//       postalcode
//     }
//   }
// `;
export const GET_MEMBERS = gql`
query MyQuery {
  jpnagar {
    accountno
    address
    dob
    emailid
    membername
    membershiptype
    mobileno
    photos
  }
}


`;



// query MyQuery {
//     jpnagar(limit: 10) {
//       AccountNo
//       Address
//       MemberName
//       MembershipType
//       MobileNo
//       sino
//     }
//   }


 // mutation MyMutation($newData: jpnagar_insert_input!) {
  //   insert_jpnagar_one(object: $newData) {
  //     AccountNo
  //     MembershipType
  //     MemberName
  //     MobileNo
  //     Address
  //   }
  // }
export const ADD_MEMBER = gql`
mutation AddMember($newData: jpnagar_insert_input!) {
  insert_jpnagar_one(object: $newData) {
    accountno
    membername
    membershiptype
    mobileno
    address
    emailid
    dob
    Pending_Amount
  }
}




 
`;


//sandeep deletion query
export const DELETE_MEMBER_BY_ACCOUNT_NO = gql`
mutation DeleteMemberByAccountNo($accountNo: String!) {
  delete_jpnagar_by_pk(AccountNo: $accountNo) {
    AccountNo
    Address
    MemberName
    MembershipType
    MobileNo
  }
}

`;

export const INSERT_IMAGE_MUTATION =gql`
mutation MyMutation($image_base64: String!, $account_no: String!) {
  insert_images_one(object: { account_no: $account_no, image_base64: $image_base64 }) {
    account_no
    image_base64
  }
}
  
`;



// niranjan bro delete query
// export const DELETE_MEMBER = gql`
//   mutation DeleteMember($id: ID!) {
//     deleteMember(id: $id)
//   }
// `;

// Define input type for mutation
export const MemberInput = gql`
  input MemberInput {
    memberid: ID!
    membershiptype: String!
    name: String!
    phonenumber: String!
    postalcode: String!
  }
`;
// export const SEARCH_MEMBERS = gql`
// query SearchMembers($filter: jpnagar_bool_exp!) {
//   jpnagar(where: { _or: [
//     { AccountNo: { _ilike: $filters } },
//     { MemberName: { _ilike: $filters } }
//   ]}) {
//     AccountNo
//     MembershipType
//     MemberName
//     MobileNo
//     Address
//   }
// }

// `;





// export const SEARCH_MEMBERS = gql`
//   query search($filter: String!, $criteria: String!) {
//     jpnagar(filterColumn: $filter, filterValue: $criteria) {
//       accountno
//       membershiptype
//       membername
//       mobileno
//       address
//       emailid
//       dob
//       pending_amount
//     }
//   }
// `;

export const SEARCH_MEMBERS = gql`
    query search($filter: String!, $criteria: String!) {
      jpnagar(where: {
        _or: [
          { accountno: { _ilike: $criteria } },
          { mobileno: { _ilike: $criteria } }
        ]
      }) {
        accountno
        Pending_Amount
        address
        dob
        emailid
        membername
        membershiptype
        mobileno
        photos
      }
    }

`;


// var filter;
// export const SEARCH_MEMBERS = gql`
// query search($filter: String!, $criteria: String!) {
//   jpnagar(filter: $filter, criteria: $criteria) {
//     AccountNo
//     MembershipType
//     MemberName
//     MobileNo
//     Address
//   }
// }
// `;

// query SearchMembers($filter: jpnagar_bool_exp!) {
//   jpnagar(where: $filter) {
//     AccountNo
//     MembershipType
//     MemberName
//     MobileNo
//     Address
//   }
// }

export const GET_IMAGES_BY_ACCOUNT_NO = gql`
query GetImagesByAccountNo($account_no: String!) {
  images(where: { account_no: { _eq: $account_no } }) {
    account_no
    image_base64
  }
}
`;


export const INSERT_IMAGES_MUTATION = gql`
mutation MyMutation($images: [images_insert_input!]!) {
  insert_images(objects: $images) {
    affected_rows
  }
}
`;


export const SEARCH_MEMBERS_ACCOUNT = gql`
query SearchMembersByAccount($eq: String = "") {
  jpnagar(where: { accountno: { _regex: $eq } }) {
    accountno
    address
    dob
    emailid
    membername
    membershiptype
    mobileno
    Pending_Amount
  }
}
`;


export const SEARCH_MEMBERS_MOBILE = gql`

query SearchMembersByMobile($eq: String = "") {
  jpnagar(where: { mobileno: { _eq: $eq } }) {
    accountno
    address
    dob
    emailid
    membername
    membershiptype
    mobileno
    Pending_Amount
  }
}
`;







export const FACILITY_LOGS_BY_ACCOUNT = gql`
  query FacilityLogsByAccount($accountNumber: String!) {
    facilitylogs(where: { AccountNo: { _eq: $accountNumber } }) {
      LogID
      AccountNo
      FacilityName
      FacilityType
      Action
      CreatedAt
    }
  }
`;


export const UPDATE_FACILITY_LOG = gql`
mutation UpdateFacilityLog($logID: Int!, $accountNumber: String!, $facilityName: String!, $action: String!) {
  update_facility_log(where: { logID: { _eq: $logID } }, _set: { accountNumber: $accountNumber, facilityName: $facilityName, action: $action }) {
    affected_rows
  }
}`;


export const GET_FACILITY_USAGE_STATUS = gql`
  query GetFacilityUsageStatus($FacilityName: String!, $currentDate: timestamptz!) {
    facilitylogs(where: { 
      createdAt: { _gte: $currentDate, _lt: $nextDay },
      FacilityName: { _eq: $FacilityName } 
    }) {
      id
      AccountNo
      FacilityName
      action
      createdAt
    }
  }
`;
export const ADD_FACILITY = gql`
  mutation AddFacility($AccountNo: String!, $FacilityName: String!) {
    insert_facilities_one(object: { AccountNo: $AccountNo, FacilityName: $FacilityName }) {
      AccountNo
      FacilityName
    }
  }
`;

export const ADD_FACILITY_LOG = gql`
  mutation AddFacilityLog($AccountNo: String!, $FacilityName: String!, $action: String!) {
    insert_facilitylogs_one(object: { AccountNo: $AccountNo, FacilityName: $FacilityName, action: $action }) {
      AccountNo
      FacilityName
      action
      createdAt
    }
  }
`;