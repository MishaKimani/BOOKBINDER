import { createContext, useState, useEffect, useRef } from "react";
import { supabase } from "../utils/SupaBaseConfig";

export const AuthContext = createContext()

export const AuthProvider = ({ children })=>{
    let mySubscription = null;
    const [session, setSession] = useState(null);
    const [username, setUsername] = useState("");
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [routeHash, setRouteHash] = useState("");
    const [isOnBottom, setIsOnBottom] = useState(false);
    const [newIncomingMessageTrigger, setNewIncomingMessageTrigger] = useState(null);
    const [unviewedMessageCount, setUnviewedMessageCount] = useState(0);
    // const [countryCode, setCountryCode] = useState("");

    // const getLocation = async () => {
    //     try {
    //       const res = await fetch("https://api.db-ip.com/v2/free/self");
    //       const { countryCode, error } = await res.json();
    //       if (error) throw new Error(error);
    
    //       setCountryCode(countryCode);
    //       localStorage.setItem("countryCode", countryCode);
    //     } catch (error) {
    //       console.error(
    //         `error getting location from api.db-ip.com:`,
    //         error.message
    //       );
    //     }
    //   };

    const randomUsername = () => {
        return `@user${Date.now().toString().substr(-4)}`;
    };
    
    const handleLogout = ()=>{
        supabase.auth.signOut()
    }

    useEffect(()=>{
      getMessagesAndSubscribe()

        supabase.auth.getSession().then((
            {data: {session}}) =>{
                setSession(session)
        })

        supabase.auth.getSession().then((
            {data: {session}}) =>{
                let name
                if (session.user) {
                    name = session.user.email.split("@")[0]
                } else {
                    name = localStorage.getItem("username") || randomUsername();
                }
                // name = session?.user.email.split("@")[0]
                // name = localStorage.getItem("username") || randomUsername();
                
                localStorage.setItem("username", name);
                setUsername(name)

        })

        // if (storedCountryCode && storedCountryCode !== "undefined")
        //   setCountryCode(storedCountryCode);
        // else getLocation();


        supabase.auth.onAuthStateChange((_event, session)=>{
            setSession(session)
        })

    }, [messages])

    useEffect(()=>{
        if (newIncomingMessageTrigger?.username === username) scrollToBottom();
        else setUnviewedMessageCount((prevCount) => prevCount + 1);
    
    }, [messages])

    const handleNewMessage = (payload) => {
        setMessages((prevMessages) => [payload.new, ...prevMessages]);
        //* needed to trigger react state because I need access to the username state
        setNewIncomingMessageTrigger(payload.new);
        console.log(newIncomingMessageTrigger)
    };

    const getInitialMessages = async () => {
        if (!messages.length) {
          const { data, error } = await supabase
            .from("messages")
            .select()
            .range(0, 49)
            .order("id", { ascending: false });
          // console.log(`data`, data);
          setLoadingInitial(false);
          if (error) {
            console.log(error.message);
            setError(error.message);
            supabase.removeSubscription(mySubscription);
            mySubscription = null;
            return;
          }
          console.log(`data`, data);
          setMessages(data);
          scrollToBottom();
        }
      };


      const getMessagesAndSubscribe = async () => {
        setError("");
        if (!mySubscription) {
          getInitialMessages();
          mySubscription = supabase
            .channel("messages")
            .on("*", (payload) => {
              handleNewMessage(payload);
            })
            .subscribe();
        }
      };
    
    const scrollRef = useRef();
    const onScroll = async ({ target }) => {
        if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
          setUnviewedMessageCount(0);
          setIsOnBottom(true);
        } else {
          setIsOnBottom(false);
        }
            //* Load more messages when reaching top
        if (target.scrollTop === 0) {
            // console.log("messages.length :>> ", messages.length);
            const { data, error } = await supabase
            .from("messages")
            .select()
            .range(messages.length, messages.length + 49)
            .order("id", { ascending: false });
            if (error) {
            setError(error.message);
            return;
            }
            target.scrollTop = 1;
            setMessages((prevMessages) => [...prevMessages, ...data]);
        }
    };

    const scrollToBottom = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      };
    return (
        <AuthContext.Provider 
        value={{
            session, 
            handleLogout, 
            username,
            auth: supabase.auth,
            messages,
            loadingInitial,
            error,
            getMessagesAndSubscribe,
            username,
            setUsername,
            randomUsername,
            scrollRef,
            onScroll,
            scrollToBottom,
            isOnBottom,
            unviewedMessageCount,
            
            }}>
            { children }
        </AuthContext.Provider>
    )
}