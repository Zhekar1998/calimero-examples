import {InformationCircleIcon} from '@heroicons/react/24/outline';
import {XMarkIcon} from '@heroicons/react/24/solid';
import {Fragment} from "react";
import {Transition} from "@headlessui/react";

interface NotificationProps {
  title: string;
  description: string;
  show: boolean;
  sticky: boolean;
  setShow: (boolean) => void;
  isError?: boolean;
  timeout?: number;
}

export default function Notification({
  title,
  description,
  show,
  sticky,
  setShow,
  isError,
  timeout = 3000
}: NotificationProps) {

  if (!sticky) {
    setTimeout(() => {
      setShow(false);
    },
      timeout);
  }

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 mt-20 z-50 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="max-w-sm w-full bg-white shadow-lg rounded-lg
            pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className={`h-6 w-6 ${ isError ? "text-red-400" : "text-green-400" }`}
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900"> {title}</p>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    className="bg-white rounded-md inline-flex text-gray-400
                      hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
