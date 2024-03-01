import Head from "next/head";
import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";

function HeadPage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  // try {
  const response = await fetch(
    "https://react-http-e1c4c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);

  // } catch (error) {
  //   console.error("Failed to fetch:", error);
  // }
  const loadedMeetups = [];

  for (const key in data) {
    loadedMeetups.push({
      id: key,
      title: data[key].title,
      image: data[key].image,
      address: data[key].address,
      description: data[key].description,
    });
  }
  return {
    props: {
      meetups: loadedMeetups,
    },
    revalidate: 1,
  };
}

export default HeadPage;
