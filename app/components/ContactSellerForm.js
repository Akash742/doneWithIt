import React from "react";
import * as Yup from "yup";
import Notifications from "expo-notifications";
import { Alert, Keyboard } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/forms/index"
import messagesApi from "../api/messages";

function ContactSellerForm({ listing }) {

    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await  messagesApi.send(message, listing.id);

        if(!result.ok)
        {
            console.log("Error", result);
            return Alert.alert("Error", "Could not send the message to the seller." );
        }

        resetForm();

        Notifications.getPresentedNotificationsAsync({
            title: "Awesome",
            body: "Your message was sent to the seller."
        })
    }

    const validationSchema = Yup.object().shape({
        message: Yup.string().required().min(1).label("Message"),
    });

    return (
        <AppForm
        initialValues={{message: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
            <AppFormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder="Messages.."
            />
            <SubmitButton title="Contact Seller"/>
        </AppForm>
    );
}

export default ContactSellerForm;