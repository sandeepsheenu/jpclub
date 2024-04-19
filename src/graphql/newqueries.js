import { gql } from '@apollo/client';

export const GET_MEMBERS = gql`
  query GetMembers {
    jpnagar {
      AccountNo
      Address
      MemberName
      MembershipType
      MobileNo
      sino
    }
  }
`;

export const ADD_MEMBER = gql`
  mutation AddMember($newData: jpnagar_insert_input!) {
    insert_jpnagar_one(object: $newData) {
      AccountNo
      MembershipType
      MemberName
      MobileNo
      Address
    }
  }
`;

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

export const MemberInput = gql`
  input MemberInput {
    memberid: ID!
    membershiptype: String!
    name: String!
    phonenumber: String!
    postalcode: String!
  }
`;

export const SEARCH_MEMBERS = gql`
  query SearchMembers($regex: String = "") {
    jpnagar(where: { AccountNo: { _regex: $regex } }) {
      AccountNo
      Address
      MemberName
      MembershipType
      MobileNo
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
    insert_facility_logs_one(object: { AccountNo: $AccountNo, FacilityName: $FacilityName, action: $action }) {
      AccountNo
      FacilityName
      action
      createdAt
    }
  }
`;
