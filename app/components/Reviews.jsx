import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { memo } from "react";
const Review = memo(({
  author_name,
  profile_photo_url,
  translated,
  original_language,
  rating,
  relative_time_description,
  text,
}) => {
  const t = useTranslations("PropertyPage");
  return (
    <li className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow mb-4">
      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        <img
          className="w-12 h-12 rounded-full border border-gray-200 object-cover"
          src={profile_photo_url}
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
            {t("translatedFrom")} {original_language?.toUpperCase()}
          </div>
        )}
      </div>
    </li>
  );
});
const Reviews = memo(({ reviews, user_ratings_total, url, rating }) => {
  const filteredReviews = reviews?.filter(
    (r) =>
      r.author_name !== "Giedre G." && r.author_name !== "Kęstutis Gedeikis" && r.rating !== 1
  );
  const t = useTranslations("PropertyPage");

  return (
    <section className="pt-4">
      {/* Header with Google Maps attribution */}
      <div className="flex sm:items-center sm:justify-between justify-around mb-6 gap-y-2 border-b pb-4 gap-x-3 flex-col sm:flex-row ">
        <div className="flex items-center gap-2 flex-wrap w-fit">
          <h3 className="font-semibold text-lg">{t("guestsReviews")}</h3>
          <div className="flex gap-x-3 items-center">
            <div className="bg-amber-400 text-white font-bold rounded px-2 py-0.5 text-sm sm:ml-2">
              {rating}
            </div>
            <span className="text-sm text-gray-600">
              {t("reviewsPlural", { count: user_ratings_total })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:px-2">
          <p className="text-sm text-gray-600 whitespace-nowrap">
            {t("infoFrom")}
          </p>
          <img className="w-8 h-8" src="/google-maps.svg" alt="Google Maps" />
        </div>
      </div>

      {/* Reviews list */}
      {filteredReviews?.length > 0 ? (
        <ul className="space-y-4">
          {filteredReviews.map((r, index) => (
            <Review key={`${r.author_name}-${index}`} {...r} />
          ))}
          <p className="w-full flex justify-center text-sm">
            <a href={url}>{t("moreReviews")}</a>
          </p>
        </ul>
      ) : (
        <div className="text-center py-8 text-gray-500">Atsiliepimų nėra.</div>
      )}
    </section>
  );
});

export default Reviews;
