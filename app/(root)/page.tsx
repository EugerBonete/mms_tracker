import Item from "@/components/item";

export default function Page() {
  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Introduction
      </h1>
      <p className="text-lg text-muted-foreground">
        Re-usable components built using Radix UI and Tailwind CSS.
      </p>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 mt-5">
        {sampleItems.map((item, k) => (
          <Item key={k} {...item} />
        ))}
      </div>
    </section>
  );
}

const sampleItems = [
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
  {
    title: "Laptop",
    description: "lorem ipsum..dasdas",
    date: "12/12/2023",
    img: "https://i2.ytimg.com/vi/DAl3dbTnAgw/0.jpg",
    location: "Room 3",
    working: true,
  },
];
