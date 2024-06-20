// export const chargerData = [
//   {
//     'Year': 2020,
//     'AC': 26687,
//     'DC Fast': 8027,
//     'Total': 34714 
//   },
//   {
//     'Year': 2021,
//     'AC': 141820,
//     'DC Fast': 28099,
//     'Total': 169919
//   },
//   {
//     'Year': 2022,
//     'AC': 278779,
//     'DC Fast': 37182,
//     'Total': 315961 
//   },
//   {
//     'Year': 2023,
//     'AC': 426337,
//     'DC Fast': 54759,
//     'Total': 481096
//   }
// ]

export const chargerData = [
  {
    'name': 2020, 'Num of Chargers': 34714,
    'children': [
      { 'type': 'AC', 'Num of Chargers': 26687 },
      { 'type': 'DC Fast', 'Num of Chargers': 8027 },
    ]
  },
  {
    'name': 2021, 'Num of Chargers': 169919,
    'children': [
      { 'type': 'AC', 'Num of Chargers': 141820 },
      { 'type': 'DC Fast', 'Num of Chargers': 28099 },
    ]
  },
  {
    'name': 2022, 'Num of Chargers': 315961,
    'children': [
      { 'type': 'AC', 'Num of Chargers': 278779 },
      { 'type': 'DC Fast', 'Num of Chargers': 37182 },
      // 'Total': 
    ]
  },
  {
    'name': 2023, 'Num of Chargers': 481096,
    'children': [
      { 'type': 'AC', 'Num of Chargers': 426337 },
      { 'type': 'DC Fast', 'Num of Chargers': 54759 },
    ]
  }
]