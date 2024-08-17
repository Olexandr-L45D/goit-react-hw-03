import Radio from "./RadioButn.module.css"
import { useState } from "react";

export default function RadioButn() {

    const [coffeeSize, setCoffeeSize] = useState("sm");

    const handleSizeChange = (evt) => {
        setCoffeeSize(evt.target.value);
    };

    return (
        <div className="Radio.item">
            <h3 className="Radio.title">Select Coffee size</h3>
            <label>
                <input
                    type="radio"
                    name="coffeeSize"
                    value="sm"
                    checked={coffeeSize === "sm"}
                    onChange={handleSizeChange}
                />
                Small
            </label>
            <label>
                <input
                    type="radio"
                    name="coffeeSize"
                    value="md"
                    checked={coffeeSize === "md"}
                    onChange={handleSizeChange}
                />
                Meduim
            </label>
            <label>
                <input
                    type="radio"
                    name="coffeeSize"
                    value="lg"
                    checked={coffeeSize === "lg"}
                    onChange={handleSizeChange}
                />
                Large
            </label>
        </div>
    );
};

