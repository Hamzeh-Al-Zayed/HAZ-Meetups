import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.data.title}</title>
        <meta name="description" constent={props.data.description} />
      </Head>
      <MeetupDetail
        image={props.data.image}
        title={props.data.title}
        address={props.data.address}
        description={props.data.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://react-http-e1c4c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  // console.log(data);

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
  // const meetupId = loadedMeetups.find({},{_id:1});
  return {
    fallback: "blocking",
    paths: loadedMeetups.map((meetup) => ({
      params: { meetupId: meetup.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const response = await fetch(
    "https://react-http-e1c4c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  );
  const data = await response.json();

  const meetupDetails = data[meetupId]; // Assuming `data` is an object where keys are `meetupId`s

  // If `meetupDetails` is undefined, then `meetupId` did not match any key in your fetched data
  if (!meetupDetails) {
    return {
      notFound: true, // This will return a 404 page if the meetupId does not exist
    };
  }

  return {
    props: {
      data: {
        id: meetupId.toString(),
        ...meetupDetails, // Spread operator to copy all properties from the specific meetup
      },
    },
    revalidate: 1, // Optionally, revalidate the page data every 10 seconds (useful for ISR)
  };
}

export default MeetupDetails;
