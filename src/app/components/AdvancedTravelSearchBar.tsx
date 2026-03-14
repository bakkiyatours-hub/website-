import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AsyncSelect from 'react-select/async';
import type { StylesConfig } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Search, SlidersHorizontal, Minus, Plus, Users, Calendar as CalendarIcon, Star } from 'lucide-react';

type Travelers = { adults: number; children: number; rooms: number };
type TourType = 'Temple Tour' | 'Adventure Tour' | 'Family Tour' | 'Honeymoon Tour';
type StarRating = 3 | 4 | 5;

export type AdvancedSearchPayload = {
  destination: string;
  tourPlace: string;
  startDate: string | null;
  endDate: string | null;
  travelers: Travelers;
  budget: { min: number; max: number };
  tourTypes: TourType[];
  starRatings: StarRating[];
};

type Option = { label: string; value: string };

type Props = {
  onSearch: (payload: AdvancedSearchPayload) => void;
  initialDestination?: string;
  initialTourPlace?: string;
};

const DESTINATIONS: Option[] = [
  { label: 'Madurai', value: 'Madurai' },
  { label: 'Rameshwaram', value: 'Rameshwaram' },
  { label: 'Kerala', value: 'Kerala' },
  { label: 'Kanyakumari', value: 'Kanyakumari' },
  { label: 'Sri Lanka', value: 'Sri Lanka' },
];

const TOUR_TYPES: TourType[] = ['Temple Tour', 'Adventure Tour', 'Family Tour', 'Honeymoon Tour'];

const easeOut = [0.22, 1, 0.36, 1] as const;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toIsoOrNull(d: Date | null) {
  return d ? d.toISOString() : null;
}

function formatDateShort(d: Date) {
  return d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
}

export function AdvancedTravelSearchBar({
  onSearch,
  initialDestination = '',
  initialTourPlace = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [destination, setDestination] = useState<Option | null>(
    initialDestination ? { label: initialDestination, value: initialDestination } : null,
  );
  const [tourPlace, setTourPlace] = useState(initialTourPlace);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  const [travelers, setTravelers] = useState<Travelers>({ adults: 2, children: 0, rooms: 1 });
  const [travelersOpen, setTravelersOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const [budgetMin, setBudgetMin] = useState(20000);
  const [budgetMax, setBudgetMax] = useState(100000);
  const [tourTypes, setTourTypes] = useState<TourType[]>([]);
  const [starRatings, setStarRatings] = useState<StarRating[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 640px)');
    if (!mq) return;
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setTravelersOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const loadDestinationOptions = useCallback(async (inputValue: string) => {
    const q = inputValue.trim().toLowerCase();
    if (!q) return DESTINATIONS;
    return DESTINATIONS.filter((o) => o.value.toLowerCase().includes(q)).slice(0, 8);
  }, []);

  const dateLabel = useMemo(() => {
    if (!startDate && !endDate) return 'Travel Dates';
    if (startDate && !endDate) return formatDateShort(startDate);
    if (startDate && endDate) return `${formatDateShort(startDate)} - ${formatDateShort(endDate)}`;
    return 'Travel Dates';
  }, [startDate, endDate]);

  const travelersLabel = useMemo(() => {
    const total = travelers.adults + travelers.children;
    return `${total} Traveler${total === 1 ? '' : 's'} • ${travelers.rooms} Room${travelers.rooms === 1 ? '' : 's'}`;
  }, [travelers]);

  const reactSelectStyles: StylesConfig<Option, false> = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 48,
        borderRadius: 9999,
        borderColor: 'transparent',
        boxShadow: state.isFocused ? '0 0 0 3px rgba(255,106,0,0.22)' : 'none',
        backgroundColor: 'transparent',
      }),
      valueContainer: (base) => ({ ...base, paddingLeft: 12, paddingRight: 12 }),
      placeholder: (base) => ({ ...base, color: '#6b7280' }),
      indicatorsContainer: (base) => ({ ...base, paddingRight: 10 }),
      dropdownIndicator: (base) => ({ ...base, color: '#6b7280' }),
      indicatorSeparator: () => ({ display: 'none' }),
      menu: (base) => ({ ...base, borderRadius: 16, overflow: 'hidden' }),
      menuList: (base) => ({ ...base, padding: 8 }),
      option: (base, state) => ({
        ...base,
        borderRadius: 12,
        backgroundColor: state.isFocused ? '#fff7ed' : 'white',
        color: '#111827',
        cursor: 'pointer',
        padding: '10px 12px',
      }),
      singleValue: (base) => ({ ...base, color: '#374151' }),
    }),
    [],
  );

  const search = useCallback(() => {
    onSearch({
      destination: destination?.value ?? '',
      tourPlace: tourPlace.trim(),
      startDate: toIsoOrNull(startDate),
      endDate: toIsoOrNull(endDate),
      travelers,
      budget: { min: budgetMin, max: budgetMax },
      tourTypes,
      starRatings,
    });
  }, [budgetMax, budgetMin, destination, endDate, onSearch, starRatings, startDate, tourPlace, tourTypes, travelers]);

  const TravelersPanel = (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: easeOut }}
      className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-[320px]"
    >
      <div className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Users className="w-4 h-4" /> Travelers
      </div>

      {(
        [
          { key: 'adults', label: 'Adults', min: 1 },
          { key: 'children', label: 'Children', min: 0 },
          { key: 'rooms', label: 'Rooms', min: 1 },
        ] as const
      ).map((row) => {
        const value = travelers[row.key];
        return (
          <div key={row.key} className="flex items-center justify-between py-2">
            <div className="text-sm text-gray-700">{row.label}</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#ff6a00] hover:bg-orange-50 transition flex items-center justify-center"
                onClick={() =>
                  setTravelers((t) => ({ ...t, [row.key]: clamp(t[row.key] - 1, row.min, 20) }))
                }
                aria-label={`Decrease ${row.label}`}
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <div className="w-8 text-center text-sm font-semibold text-gray-900">{value}</div>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#ff6a00] hover:bg-orange-50 transition flex items-center justify-center"
                onClick={() =>
                  setTravelers((t) => ({ ...t, [row.key]: clamp(t[row.key] + 1, row.min, 20) }))
                }
                aria-label={`Increase ${row.label}`}
              >
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto">
      <div className="bg-white rounded-full p-2 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="px-1">
            <AsyncSelect<Option, false>
              cacheOptions
              defaultOptions
              loadOptions={loadDestinationOptions}
              value={destination}
              onChange={(opt) => setDestination(opt)}
              placeholder="Destination"
              styles={reactSelectStyles}
              isClearable
              classNamePrefix="bk-select"
            />
          </div>

          <input
            type="text"
            placeholder="Tour Place"
            className="px-4 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#ff6a00]/20 transition shadow-sm hover:shadow-md"
            value={tourPlace}
            onChange={(e) => setTourPlace(e.target.value)}
          />

          <div className="px-2 flex items-center rounded-full shadow-sm hover:shadow-md transition focus-within:ring-4 focus-within:ring-[#ff6a00]/20">
            <CalendarIcon className="w-5 h-5 text-gray-500 ml-2" />
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update as [Date | null, Date | null])}
              minDate={new Date()}
              placeholderText="Travel Dates"
              className="w-full px-3 py-3 rounded-full text-gray-700 focus:outline-none bg-transparent"
              popperClassName="bk-date__popper"
              calendarClassName="bk-date__calendar"
              popperPlacement="bottom-start"
              customInput={
                <button type="button" className="w-full text-left px-3 py-3 rounded-full text-gray-700">
                  {dateLabel}
                </button>
              }
            />
          </div>

          <motion.button
            type="button"
            onClick={search}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden px-8 py-3 rounded-full flex items-center justify-center gap-2 text-white font-semibold
                       bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] shadow-lg hover:shadow-xl transition"
          >
            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_45%)]" />
            <Search className="w-5 h-5 relative" />
            <span className="relative">Search</span>
          </motion.button>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="relative">
          <button
            type="button"
            className="text-white/90 hover:text-white text-sm underline-offset-4 hover:underline transition flex items-center gap-2"
            onClick={() => setTravelersOpen((v) => !v)}
          >
            <Users className="w-4 h-4" />
            {travelersLabel}
          </button>

          <AnimatePresence>
            {travelersOpen && !isMobile && <div className="absolute z-50 mt-3">{TravelersPanel}</div>}
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="text-white/90 hover:text-white text-sm underline-offset-4 hover:underline transition flex items-center gap-2"
          onClick={() => setAdvancedOpen((v) => !v)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Advanced Filters
        </button>
      </div>

      <AnimatePresence>
        {advancedOpen && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="mt-3 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-gray-900 mb-2">Budget (₹)</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Min</span>
                    <span className="font-semibold">₹{budgetMin.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={1000}
                    value={budgetMin}
                    onChange={(e) => setBudgetMin(Math.min(Number(e.target.value), budgetMax - 1000))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Max</span>
                    <span className="font-semibold">₹{budgetMax.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={1000}
                    value={budgetMax}
                    onChange={(e) => setBudgetMax(Math.max(Number(e.target.value), budgetMin + 1000))}
                    className="w-full accent-orange-500"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-gray-900 mb-2">Tour Type</div>
                <div className="flex flex-wrap gap-2">
                  {TOUR_TYPES.map((t) => {
                    const active = tourTypes.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() =>
                          setTourTypes((prev) => (active ? prev.filter((x) => x !== t) : [...prev, t]))
                        }
                        className={`px-3 py-2 rounded-full text-sm transition border ${
                          active
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-gray-900 mb-2">Star Rating</div>
                <div className="flex gap-2">
                  {[3, 4, 5].map((r) => {
                    const rr = r as StarRating;
                    const active = starRatings.includes(rr);
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() =>
                          setStarRatings((prev) =>
                            active ? prev.filter((x) => x !== rr) : [...prev, rr],
                          )
                        }
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition border ${
                          active
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${active ? 'fill-white' : 'fill-orange-400'}`} />
                        {r}★
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {advancedOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setAdvancedOpen(false)} />
            <motion.div
              initial={{ y: 420 }}
              animate={{ y: 0 }}
              exit={{ y: 420 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="absolute left-0 right-0 bottom-0 bg-white rounded-t-3xl p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-base font-semibold">Advanced Filters</div>
                <button type="button" className="text-sm text-gray-600" onClick={() => setAdvancedOpen(false)}>
                  Close
                </button>
              </div>

              <div className="mb-5">{TravelersPanel}</div>

              <div className="mb-5">
                <div className="text-sm font-semibold text-gray-900 mb-2">Budget (₹)</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Min</span>
                    <span className="font-semibold">₹{budgetMin.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={1000}
                    value={budgetMin}
                    onChange={(e) => setBudgetMin(Math.min(Number(e.target.value), budgetMax - 1000))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Max</span>
                    <span className="font-semibold">₹{budgetMax.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={1000}
                    value={budgetMax}
                    onChange={(e) => setBudgetMax(Math.max(Number(e.target.value), budgetMin + 1000))}
                    className="w-full accent-orange-500"
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="text-sm font-semibold text-gray-900 mb-2">Tour Type</div>
                <div className="flex flex-wrap gap-2">
                  {TOUR_TYPES.map((t) => {
                    const active = tourTypes.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() =>
                          setTourTypes((prev) => (active ? prev.filter((x) => x !== t) : [...prev, t]))
                        }
                        className={`px-3 py-2 rounded-full text-sm transition border ${
                          active
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-2">Star Rating</div>
                <div className="flex gap-2">
                  {[3, 4, 5].map((r) => {
                    const rr = r as StarRating;
                    const active = starRatings.includes(rr);
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() =>
                          setStarRatings((prev) =>
                            active ? prev.filter((x) => x !== rr) : [...prev, rr],
                          )
                        }
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition border ${
                          active
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${active ? 'fill-white' : 'fill-orange-400'}`} />
                        {r}★
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => {
                  setAdvancedOpen(false);
                  search();
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white py-3 rounded-full font-semibold shadow-lg"
              >
                Apply & Search
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .bk-date__popper { z-index: 80; }
        .bk-date__calendar { border: 0; font-family: inherit; }
        .bk-date__calendar .react-datepicker__header { background: white; border-bottom: 1px solid #f3f4f6; }
        .bk-date__calendar .react-datepicker__day--selected,
        .bk-date__calendar .react-datepicker__day--in-range,
        .bk-date__calendar .react-datepicker__day--keyboard-selected {
          background: #ff6a00 !important; color: white !important;
        }
        .bk-date__calendar .react-datepicker__day:hover { background: #fff7ed; }
      `}</style>
    </div>
  );
}
