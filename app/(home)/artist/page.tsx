'use client';

import { useState } from "react";
import { artistData } from "@/app/_lib/data";
import ArtistFrame from "@/components/layout/artistframe";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

export default function Page() {
    const [selectedRole, setSelectedRole] = useState("All");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const roles = ["All", ...Array.from(new Set(artistData.map((artist) => artist.role)))];

    const filteredArtists = selectedRole === "All"
        ? artistData
        : artistData.filter((artist) => artist.role === selectedRole);

    const sortedArtists = [...filteredArtists].sort((a, b) => {
        const comparison = sortBy === "name"
            ? a.name.localeCompare(b.name)
            : a.role.localeCompare(b.role);

        return sortOrder === "asc" ? comparison : -comparison;
    });

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="min-h-full w-full p-8 overflow-auto">
            <h2 className="text-4xl font-bold my-8">Our Members</h2>


            <div className="mb-4 flex flex-col md:flex-row gap-2">
                {/* Filter */}
                <div className="flex items-center">
                    <label htmlFor="roleFilter" className="mr-2">Filter: </label>
                    <select
                        id="roleFilter"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-orange-600"
                    >
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort */}
                <div className="flex items-center">
                    <label htmlFor="sortBy" className="mr-2">Sort by:</label>
                    <select
                        id="sortBy"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-orange-600"
                    >
                        <option value="name">Name</option>
                        <option value="role">Role</option>
                    </select>

                    <button onClick={toggleSortOrder} className="ml-4 p-2">
                        {sortOrder === "asc" ? (
                            <FaSortAlphaDown className="text-xl" aria-label="Ascending Order" />
                        ) : (
                            <FaSortAlphaUp className="text-xl" aria-label="Descending Order" />
                        )}
                    </button>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center text-center gap-6">
                {sortedArtists.map((artist) => (
                    <ArtistFrame
                        key={artist.id}
                        id={artist.id.toString()}
                        name={artist.name}
                        role={artist.role}
                        about={artist.about}
                        imgSrc={artist.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
}
