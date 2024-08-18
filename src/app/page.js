import PageClient from "./PageClient";
 
//API call
async function fetchItems() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 10 }, // Optional: caching strategy
  });
  const items = await res.json();
  console.log("hey")
  return items;
}

export default async function Page() {
  const items = await fetchItems();
  return (
    <div> 
    <PageClient items={items} />;  
    </div>
  )
}
