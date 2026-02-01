import api from "@/lib/axios";

type SignupData = {
    email: string;
    password: string;
    fullname: string;
    username: string;
}

type SigninData = {
    identifier: string;
    password: string;
}

type MessageData = {
    username: string;
    content: string;
}

type ResponseData = {
    identifier: string;
    content: string;
}

export const signupUser = async(data: SignupData) => {
    const res = await api.post("/api/v1/auth/signup", data);
    return res.data
};

export const signinUser = async(data: SigninData) => {
    const res = await api.post("/api/v1/auth/signin", data);
    return res.data;
};

export const signoutUser = async() => {
    const res = await api.post("/api/v1/auth/signout");
    return res.data;
};

export const getUser = async() => {
    const res = await api.get("/api/v1/auth/me");
    return res.data;
};

export const getUserProfile = async(username: string) => {
    const res = await api.post("/api/v1/auth/username", {
        username
    })
    return res.data;
};

export const toggleVisibility = async(isPrivate: boolean | null) => {
    const res = await api.patch("/api/v1/auth/visibility", {isPrivate});
    return res.data;
}

export const sendMessage = async(data: MessageData) => {
    const res = await api.post("/api/v1/message/send", data);
    return res.data;
};

export const messageStatus = async(id: string, status: boolean) => {
    const res = await api.patch(`/api/v1/message/${id}`, { status }
    );
    return res.data;
}

export const getMessages = async() => {
    const res = await api.get("/api/v1/message/get");
    return res.data;
};

export const deleteMessage = async(id: string) => {
    const res = await api.delete(`/api/v1/message/${id}`);
    return res.data;
}

export const shareThought = async(content: string) => {
    const res = await api.post("/api/v1/thought/share", {
        content}
    );
    return res.data;
};

export const getThoughts = async() => {
    const res = await api.get("/api/v1/thought/get");
    return res.data;
};

export const getPublicThoughts = async() => {
    const res = await api.get("/api/v1/thought/public");
    return res.data;
}

export const deleteThought = async(id: string) => {
    const res = await api.delete(`/api/v1/thought/${id}`);
    return res.data;
};

export const responseForm = async(data: ResponseData) => {
    const res = await api.post("api/v1/users/response", data);
    return res.data;
}