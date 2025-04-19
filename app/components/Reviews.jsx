"use client";
import { Star } from "lucide-react";

const Review = ({
  author_name,
  profile_photo_url,
  translated,
  original_language,
  rating,
  relative_time_description,
  text,
}) => {
  return (
    <li className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow mb-4">
      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        <img
          className="w-12 h-12 rounded-full border border-gray-200 object-cover"
          src={profile_photo_url || "/placeholder.svg"}
          alt={`${author_name}'s profile`}
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg?height=48&width=48";
          }}
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h5 className="font-medium text-gray-900">{author_name}</h5>
            <span className="text-sm text-gray-500">
              {relative_time_description}
            </span>
          </div>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"} mr-0.5`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review text */}
      <div className="mt-3">
        <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
          {text}
        </p>

        {/* Translation indicator */}
        {translated && (
          <div className="mt-2 text-xs text-gray-500 italic">
            išversta iš {original_language?.toUpperCase()}
          </div>
        )}
      </div>
    </li>
  );
};

const Reviews = ({ reviews, user_ratings_total, url }) => {
  // Calculate average rating
  const averageRating = reviews?.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(
        1
      )
    : "0.0";

  return (
    <section className="py-4">
      {/* Header with Google Maps attribution */}
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg">Svečių atsiliepimai</h3>
          <div className="bg-amber-400 text-white font-bold rounded px-2 py-0.5 text-sm ml-2">
            {averageRating}
          </div>
          <span className="text-sm text-gray-600">
            {user_ratings_total} atsiliepimų
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">Informacija iš</p>
          <img className="w-8 h-8" src="/google-maps.svg" alt="Google Maps" />
        </div>
      </div>

      {/* Reviews list */}
      {reviews?.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((r, index) => (
            <Review key={`${r.author_name}-${index}`} {...r} />
          ))}
        </ul>
      ) : (
        <div className="text-center py-8 text-gray-500">Atsiliepimų nėra.</div>
      )}
    </section>
  );
};

export default Reviews;
