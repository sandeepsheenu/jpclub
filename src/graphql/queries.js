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

export const ADD_MEMBER = gql`
  mutation MyMutation($newData: jpnagar_insert_input!) {
    insert_jpnagar_one(object: $newData) {
      AccountNo
      MembershipType
      MemberName
      MobileNo
      Address
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



// `;
// var filter;
// export const SEARCH_MEMBERS = gql`
// query MyQuery($AccountNo: String = "") {
//   jpnagar_by_pk(AccountNo: $AccountNo) {
//     AccountNo
//     Address
//     MemberName
//     MembershipType
//     MobileNo
//   }
// }
// `;

// var filter;
// export const SEARCH_MEMBERS = gql`
// query SearchMembers($regex: String = "") {
//   jpnagar(where: {AccountNo: {_regex: $regex}}) {
//     AccountNo
//     Address
//     MemberName
//     MembershipType
//     MobileNo
//   }
// }
// `;


var filter;
export const SEARCH_MEMBERS = gql`
query search($filter: String!, $criteria: String!) {
  jpnagar(filter: $filter, criteria: $criteria) {
    AccountNo
    MembershipType
    MemberName
    MobileNo
    Address
  }
}
`;

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
