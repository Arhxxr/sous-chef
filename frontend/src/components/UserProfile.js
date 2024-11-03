
import React, { useState } from "react";

const userProfile = {
    name: "John Doe",
    dietary_restrictions: ["vegan"], // Default restriction
    preferences: {
        meal_type: "Main Course",
        time_to_cook: 30, // In minutes
        calories_per_meal: 500, // In calories
        cuisine_type: "Asian"
    },
    
    // Method to update the user's name
    updateName(newName) {
        this.name = newName;
        this.saveToLocalStorage();
    },

    // Method to update dietary restrictions
    updateDietaryRestrictions(newRestrictions) {
        this.dietary_restrictions = newRestrictions;
        this.saveToLocalStorage();
    },

    // Method to update meal preferences
    updatePreferences(newPreferences) {
        this.preferences = { ...this.preferences, ...newPreferences };
        this.saveToLocalStorage();
    },

    // Method to load user profile from localStorage
    loadFromLocalStorage() {
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            const parsedProfile = JSON.parse(storedProfile);
            this.name = parsedProfile.name || this.name;
            this.dietary_restrictions = parsedProfile.dietary_restrictions || this.dietary_restrictions;
            this.preferences = parsedProfile.preferences || this.preferences;
        }
    },

    // Method to save user profile to localStorage
    saveToLocalStorage() {
        localStorage.setItem('userProfile', JSON.stringify(this));
    },

    clearData() {
        this.name = null;
        this.dietary_restrictions = null;
        this.preferences = null;
    }
};


export default userProfile;