const ctx = document.getElementById("myChart");
const filter = document.getElementById("filter_btn");
const date_btn = document.getElementById("date_btn");
let startdate = document.getElementById("startdate");
let enddate = document.getElementById("enddate");
let start_value = document.getElementById("start_value");
let end_value = document.getElementById("end_value");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    backgroundColor: ["black"],
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const totalData = [
  {
    product: "T-shirt",
    orders: 10,
    date: "2023-05-05",
    total_revenue: 10000,
  },
  {
    product: "Jeans",
    orders: 5,
    date: "2023-01-10",
    total_revenue: 5000,
  },
  {
    product: "Shoe",
    orders: 2,
    date: "2023-05-24T12:58:17.430Z",
    total_revenue: 2500,
  },
  {
    product: "Cap",
    orders: 3,
    date: "2020-12-15",
    total_revenue: 1500,
  },
];

const renderData = (data) => {
  const table = document.getElementById("table_a");
  table.innerHTML = null;
  const trs = document.createElement("tr");
  const pd = document.createElement("th");
  pd.innerText = "Products";
  const ord = document.createElement("th");
  ord.innerText = "Orders";
  const dt = document.createElement("th");
  dt.innerText = "Date";
  const re = document.createElement("th");
  re.innerText = "Total_revenue";

  trs.append(pd, ord, dt, re);
  table.append(trs);

  data.forEach(({ product, orders, date, total_revenue }) => {
    // console.log(product, orders, total_revenue);
    const tr = document.createElement("tr");
    const p = document.createElement("td");
    p.innerText = product;
    const o = document.createElement("td");
    o.innerText = orders;
    const d = document.createElement("td");
    d.innerText = new Date(date).toDateString();
    const r = document.createElement("td");
    r.innerText = total_revenue;

    tr.append(p, o, d, r);
    table.append(tr);
  });
};
renderData(totalData);

filter.onclick = () => {
  // console.log(startdate.value, enddate.value, start.value, end.value);

  const all = totalData.filter(function (a) {
    return (
      a.total_revenue > start_value.value && a.total_revenue < end_value.value
    );
  });
  renderData(all);
};

date_btn.onclick = () => {
  let startD = startdate.value;
  let endD = enddate.value;
  const all = totalData.filter(function (a) {
    return a.date > startD && a.date < endD;
  });
  renderData(all);
};
