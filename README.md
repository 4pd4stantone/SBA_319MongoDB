# Medical Foster Care – SBA 319 (Node/Express + MongoDB + EJS)

This is a full‑stack coursework project that manages Nurses, Patients, and Medications for a Medical Foster Care program using **Express 5**, **Mongoose 8**, and **EJS**. It includes CRUD flows for nurses, program/team views, caseload lists by borough, and a medications catalog with seeding utilities.

## Features
- Nurse directory with add, edit, detail, and delete flows.
- Patients list with detail pages combining nurse and patient info.
- Medications list with sample data seed.
- Team views: Bronx and Brooklyn teams, plus caseload views (`/patients/bxcases`, `/patients/bkcases`).
- Server‑rendered EJS views with simple partials (`partials/head.ejs`, `partials/nav.ejs`).
- Mongoose models with basic validation and helpful collection indexes for common queries.
- Method override for form‑based PUT/DELETE from EJS forms.

## Tech Stack
- **Runtime:** Node.js
- **Web:** Express 5, EJS
- **DB:** MongoDB Atlas / local, Mongoose 8
- **Utilities:** dotenv, method-override

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Create `.env` in the project root:
   ```env
   ATLAS_URI=mongodb://127.0.0.1:27017/sba   # or your Atlas connection string
   PORT=3000
   ```
3. Run the server
   ```bash
   node index.js
   ```
   Then visit `http://localhost:3000/`.

## NPM Scripts
- **test** → `echo "Error: no test specified" && exit 1`

## Models
- **nurses** (`model/nurses.js`): nurse_id, first_name, last_name, title, license_number, active, expiration_date, level_of_education, years_of_experience, date_hired, team, geographical_area_covered, schedule, telephone, email
- **patients** (`model/patients.js`): patient_id, first_name, last_name, sex, date_of_birth, admission_date, foster_parent_name, address, telephone, email, program, nurse_id, diagnoses, medication_list, program_location, geographical_location, main_clinic, outside_clinic
- **medications** (`model/medications.js`): medication_name, route, purpose, side_effects, contraindications, drug_interactions, nursing_education

**Indexes used (patients model):**
- `geographical_location` (1)
- `program_location` (1)
- `main_brightPath_clinic` (1)

## Key Views
- `views/index.ejs` – Landing page and navigation.
- `views/nurses.ejs` – Nurses list.
- `views/nurseinfo.ejs` – Nurse detail.
- `views/addnurse.ejs` & `views/editnurse.ejs` – Create/update forms.
- `views/medicationlist.ejs` – Medication catalog.
- `views/bxcases.ejs` / `views/bkcases.ejs` – Caseloads by borough.
- `views/patientinfo.ejs` – Patient detail with contact and clinic info.


## Routes
Mounted bases inferred from `index.js` imports:
- `/medications` → `routes/medications.js`
- `/nurses` → `routes/nurses.js`
- `/patients` → `routes/patients.js`

| Method | Base | Path | Description |
|---|---|---|---|
| `GET` | `/medications` | `/list` | |
| `GET` | `/medications` | `/seed` | |
| `GET` | `/medications` | `/` | |
| `GET` | `/nurses` | `/seed` | |
| `GET` | `/nurses` | `/addnurse` | |
| `GET` | `/nurses` | `/edit/:id` | |
| `PUT` | `/nurses` | `/edit/:id` | |
| `POST` | `/nurses` | `/addnurse` | |
| `GET` | `/nurses` | `/bronxteam` | |
| `GET` | `/nurses` | `/brooklynteam` | |
| `DELETE` | `/nurses` | `/:id` | |
| `GET` | `/nurses` | `/:id` | |
| `GET` | `/nurses` | `/` | |
| `GET` | `/patients` | `/bxcases` | |
| `GET` | `/patients` | `/bkcases` | |
| `GET` | `/patients` | `/seed` | |
| `GET` | `/patients` | `/cases/:id` | |
| `GET` | `/patients` | `/` | |

## Seeding
- **Medications:** `GET /medications/seed` seeds from `data/medications.js`.
- **Nurses:** `GET /nurses/seed` clears and inserts from `data/nurses.js`.
- **Patients:** `GET /patients/seed` clears and inserts from `data/patients.js`.

## Data Entry Tips
- **Teams:** Bronx Team / Brooklyn Team.
- **Geo coverage:** Bronx, Manhattan, Queens, Westchester, Brooklyn, Long Island, Staten Island.
- **Patients:** Be sure to set `program`, `program_location`, and `main_brightPath_clinic` to benefit from indexes.

## Testing Quick Checks
- Hit `/nurses` to list nurses; view a specific nurse at `/nurses/:id`.
- Add a nurse at `/nurses/addnurse`; edit at `/nurses/edit/:id`.
- Browse `/patients`, then `/patients/:id` for details.
- See medications at `/medications/list`; run `/medications/seed` if empty.

## Author

Victor Stanton
Software Engineer
Email: Victor.Stanton@gmail.com

## License

MIT License © 2025 Victor Stanton
