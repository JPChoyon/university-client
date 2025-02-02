export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const bloodGroups = ["A+", "B+", "O+", "AB+", "A-", "AB-", "O-", "B-"];
export const gender = ["Male", "Female", "Other"];
export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
export const genderOptions = gender.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));
