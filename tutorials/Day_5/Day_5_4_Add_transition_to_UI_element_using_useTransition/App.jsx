import React, { useState, useTransition } from "react";
import AboutTab from "./pages/AboutTab";
import ContactTab from "./pages/ContactTab";
import Loading from "./pages/Loading";
import PostsTab from "./pages/PostsTab";

const App = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const selectTab = (tabName) => {
    startTransition(() => {
      setTab(tabName);
    });
  };

  return (
    <div>
      <button onClick={() => selectTab("about")}>About</button>
      <button onClick={() => selectTab("posts")}>Posts</button>
      <button onClick={() => selectTab("contact")}>Contact</button>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
      {isPending && <Loading />}
    </div>
  );
};

export default App;
